import * as types from '../constants/ActionType';

let initialState = [];

const findIndex = (products, id) => {
  let result = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      result = index;
    }
  });
  return result;
}

const products = (state = initialState, action) => {
  let index = -1;
  switch(action.type) {
    case types.FETCH_PRODUCTS:
      state = action.payload;
      return [...state];
    case types.ADD_PRODUCT:
      state.push(action.payload);
      return state;
    case types.UPDATE_PRODUCT:
      index = findIndex(state, action.payload.id);
      state[index] = action.payload;
      return [...state];
    case types.DELETE_PRODUCT:
      index = findIndex(state, action.payload);
      state.splice(index, 1);
      return [...state];
    default: return [...state];
  }
}

export default products;