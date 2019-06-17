import { combineReducers } from 'redux';

import keyboardReducer from './keyboard-reducer';
import getApi from './getText-reducer';

const reducers = combineReducers({
  keyboardReducer,
  getApi
});

export default reducers;
