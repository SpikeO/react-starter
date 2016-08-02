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
