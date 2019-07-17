import * as types from '../constants/ActionType';
import callApi from '../utils/api';

export const actFetchProductsRequest = () => {
  return async (dispatch) => {
    const res = await callApi('products');
    dispatch(actFetchProducts(res.data));
  }
}

export const actFetchProducts = (products) => {
  return {
    type: types.FETCH_PRODUCTS,
    payload: products
  }
}

export const actAddProductRequest = (product) => {
  return async (dispatch) => {
    const res = await callApi('products', 'POST', product);
    dispatch(actAddProduct(res.data));
  }
}

export const actAddProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    payload: product
  }
}

export const actUpdateProductRequest = (id, product) => {
  return async (dispatch) => {
    const res = await callApi(`products/${id}`, 'PUT', product);
    dispatch(actUpdateProduct(res.data));
  }
}

export const actUpdateProduct = (product) => {
  return {
    type: types.UPDATE_PRODUCT,
    payload: product
  }
}

export const actDeleteProductRequest = (id) => {
  return async (dispatch) => {
    await callApi(`products/${id}`, 'DELETE');
    dispatch(actDeleteProduct(id));
  }
}

export const actDeleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    payload: id
  }
}

export const actGetProductRequest = (id) => {
  return async (dispatch) => {
    const res = await callApi(`products/${id}`, 'GET');
    dispatch(actGetProduct(res.data));
  }
}

export const actGetProduct = (product) => {
  return {
    type: types.EDIT_PRODUCT,
    payload: product
  }
}
