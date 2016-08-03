import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../redux/reducers/index';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducer, initialState, compose(
      applyMiddleware(sagaMiddleware, createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    ),
    runSaga: sagaMiddleware.run
  };
}
