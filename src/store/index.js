import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import '../configs/reactotron';
import sagas from './sagas';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const store = process.env.NODE_ENV === 'development'
  ? createStore(
    reducers,
    compose(
      console.tron.createEnhancer(),
      applyMiddleware(...middlewares),
    ),
  )
  : createStore(reducers);
sagaMiddleware.run(sagas);
export default store;
