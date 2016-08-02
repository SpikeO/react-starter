# Redux-saga
Redux-saga is a better alternative to [Redux-thunk](https://github.com/gaearon/redux-thunk). Generators are better than using Redux-thunk's promises which aren't easy to test and can get complicated.

[Documentation](http://yelouafi.github.io/redux-saga/docs)
[Redux-saga at React-Europe (youtube video)](https://www.youtube.com/watch?v=QJVdcIlqGwc)

## Setup 
Add the middleware to the redux store.

[src/redux/createStore.js](../src/redux/createStore.js)

```
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../redux/reducers/index';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducer, initialState,
      applyMiddleware(
        sagaMiddleware,
        createLogger())
    ),
    runSaga: sagaMiddleware.run
  };
}

```

## Usage 
Register saga and listen for a specific redux action. Here we want to 'watch' for the `COUNTER_INCREMENT_ASYNC` action
```
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
    watchIncrementAsync()`
  ];
}
```

When you call the action `incrementAsyncAction`([src/redux/actions/index.js](../src/redux/actions/index.js)), redux-saga will trigger the `incrementAsync` generator, delay for 1 second and eventually dispatch the action where the reducer catches it.