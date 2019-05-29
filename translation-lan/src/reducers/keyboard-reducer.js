import * as types from '../actions/ActionTypes';

const initialState = {
  text: '',
};

export default function keyboard(state = initialState, action) {
  switch (action.type) {
    case types.KEYBOARD_TEXT:
      return { ...state, text: '가가가' };
    default:
      return state;
  }
}
