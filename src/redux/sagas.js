import { takeEvery, delay } from 'redux-saga';
import { put, take, fork, select, call } from 'redux-saga/effects';
import { COUNTER_INCREMENT, COUNTER_INCREMENT_ASYNC, GITHUB_SEARCH, repo } from './actions';
import * as api from '../services/api-github';

export const getRepo = (state, fullName) => state.githubsearch.repos[fullName];

/**
 * Reusable fetch Subroutine
 * @param entity : repo
 * @param apiFn : api.fetchUser | api.fetchRepo | ...
 * @param id : login | fullName
 * @param url : next page url. If not provided will use pass it to apiFn
 */
function* fetchEntity(entity, apiFn, id, url) {
  yield put(entity.request(id));
  const { response, error } = yield call(apiFn, url || id);
  if (response) {
    yield put(entity.success(id, response));
  } else {
    yield put(entity.failure(id, error));
  }
}
export const fetchRepo = fetchEntity.bind(null, repo, api.fetchRepo);


export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: COUNTER_INCREMENT });
}

// Our watcher Saga: spawn a new incrementAsync task on each COUNTER_INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield* takeEvery(COUNTER_INCREMENT_ASYNC, incrementAsync);
}

function* searchGithubRepoByName(fullName, requiredFields) {
  const newrepo = yield select(getRepo, fullName);
  if (!newrepo || requiredFields.some(key => !newrepo.hasOwnProperty(key))) {
    yield call(fetchRepo, fullName);
  }
}

// Fetches data for a Repo: repo data + repo stargazers
function* watchSearchRepoAction() {
  while (true) {
    const { fullName, requiredFields = [] } = yield take(GITHUB_SEARCH);
    yield fork(searchGithubRepoByName, fullName, requiredFields);
  }
}

export default function* rootSaga() {
  yield [
    fork(watchIncrementAsync),
    fork(watchSearchRepoAction)
  ];
}
