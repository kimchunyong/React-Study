import { combineReducers } from 'redux';

import keyboardReducer from './keyboard-reducer';

const reducers = combineReducers({
  keyboardReducer,
});

export default reducers;
