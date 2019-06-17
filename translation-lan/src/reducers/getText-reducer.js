import * as types from '../actions/ActionTypes';

const initialState = {
  getText: {},
};

export default function getApi(state = initialState, action) {
  switch (action.type) {
    case types.GET_TEXT:
      return { ...state, loading:true };
    default:
      return state;
  }
}
