import { combineReducers } from 'redux';
import product from './product';
import products from './products';

const appReducers = combineReducers({
  product,
  products
});

export default appReducers;