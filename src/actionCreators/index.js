import {
  fetchProductsPending,
  fetchProductsError,
  fetchProductsSuccess,
  fetchSelectedProductDetailsPending,
  fetchSelectedProductDetailsSuccess,
  fetchSelectedProductDetailsError,
} from '../actions';

export function fetchProducts1(dispatch) {
  console.log('sdjfhsd');
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch('https://api.openbrewerydb.org/breweries')
      .then(res => res.json())
      .then(res => {
        console.log('sd ', res);
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchProductsSuccess(res.products));
        return res.products;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

export async function fetchProducts2() {
  const response = await fetch(`https://api.openbrewerydb.org/breweries`);
  const data = await response.json();
  dispatch(fetchProductsSuccess(data));
}
export function fetchProducts(dispatch) {
  fetch(`https://api.openbrewerydb.org/breweries`)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      return dispatch => {
        dispatch({
          type: 'FETCH_PRODUCTS_SUCCESS',
          products: json,
        });
      };
    });
}
export function fetchProducts3() {
  return async dispatch => {
    try {
      const users = await fetch(`https://api.openbrewerydb.org/breweries`, {
        method: 'GET',
      });
      const data = await users.json();

      dispatch(fetchProductsSuccess(data));
    } catch (err) {
      dispatch(fetchProductsError(error));
    }
  };
}

export function getListBreweryItems() {
  return dispatch => {
    return (
      fetch(`https://api.openbrewerydb.org/breweries`, {
        method: 'GET',
      })
        .then(result => {
          return result.json();
        })
        .then(jsonResult => {
          console.log('action creator', jsonResult);
          dispatch(fetchProductsSuccess(jsonResult));
        }),
      error => console.log(error)
    );
  };
}
