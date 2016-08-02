import { takeEvery, delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { COUNTER_INCREMENT, COUNTER_INCREMENT_ASYNC } from './actions';

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: COUNTER_INCREMENT });
}

// Our watcher Saga: spawn a new incrementAsync task on each COUNTER_INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield* takeEvery(COUNTER_INCREMENT_ASYNC, incrementAsync);
}

export default function* rootSaga() {
  yield [
    watchIncrementAsync()
  ];
}
