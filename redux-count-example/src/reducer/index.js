import { combineReducers } from 'redux';
import count from './count';
import input from './input';

const reducers = combineReducers({
  count,
  input
});

export default reducers;
