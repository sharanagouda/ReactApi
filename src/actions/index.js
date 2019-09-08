import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_SELECTED_PROCUTDETAILS_PENDING,
  FETCH_SELECTED_PROCUTDETAILS_SUCCESS,
  FETCH_SELECTED_PROCUTDETAILS_ERROR,
} from '../actionTypes';

export function fetchProductsPending(){
    return{
        type:FETCH_PRODUCTS_PENDING
    }
}

export function fetchProductsSuccess(products){
    return{
        type: FETCH_PRODUCTS_SUCCESS,
        products: products
    }
}

export function fetchProductsError(error){
    return{
        type :FETCH_PRODUCTS_ERROR,
        error : error
    }
}

export function fetchSelectedProductDetailsPending(){
    return{
        type: FETCH_SELECTED_PROCUTDETAILS_PENDING
    }
}

export function fetchSelectedProductDetailsSuccess(data){
    return{
        type : FETCH_SELECTED_PROCUTDETAILS_SUCCESS,
        products : data
    }
}

export function fetchSelectedProductDetailsError(error){
    return {
        type : FETCH_SELECTED_PROCUTDETAILS_ERROR,
        error : error
    }
}