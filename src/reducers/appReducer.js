import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_SELECTED_PROCUTDETAILS_PENDING,
  FETCH_SELECTED_PROCUTDETAILS_SUCCESS,
  FETCH_SELECTED_PROCUTDETAILS_ERROR,
} from '../actionTypes';

const initialState = {
  pending: false,
  products: [],
  error: null,
};

export default productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.payload,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case FETCH_SELECTED_PROCUTDETAILS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SELECTED_PROCUTDETAILS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.payload,
      };
    case FETCH_SELECTED_PROCUTDETAILS_ERROR: {
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

// export const getProducts = state => state.products;
// export const getProductsPending = state => state.pending;
// export const getProductsError = state => state.error;
