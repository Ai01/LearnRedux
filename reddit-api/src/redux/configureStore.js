import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducr from './reducers';


export default function configureStore(preloadedState) {
  return createStore(
    rootReducr,
    preloadedState,
    applyMiddleware(thunkMiddleware, logger),
  );
}
