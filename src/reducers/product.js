import * as types from '../constants/ActionType';

let initialState = {};

const product = (state = initialState, action) => {
  switch(action.type) {
    case types.EDIT_PRODUCT:
      state = action.payload;
      return {...state};
    default: return {...state};
  }
}

export default product;