import * as types from './ActionTypes';

export function keyDown() {
  return {
    type: types.KEYBOARD_TEXT,
  };
}

export function getTxt(){
  return {
    type: types.GET_TEXT,
  }
}
