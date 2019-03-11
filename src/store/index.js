import { createStore, compose } from 'redux';
import reducers from './reducers';
import '../configs/reactotron';

export default (process.env.NODE_ENV === 'development'
  ? createStore(reducers, compose(console.tron.createEnhancer()))
  : createStore(reducers));
