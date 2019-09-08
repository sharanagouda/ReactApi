import {
  fetchProductsPending,
  fetchProductsError,
  fetchProductsSuccess,
  fetchSelectedProductDetailsPending,
  fetchSelectedProductDetailsSuccess,
  fetchSelectedProductDetailsError,
} from '../actions';

// export function fetchProducts() {
//   return dispatch => {
//     dispatch(fetchProductsPending());
//     return fetch(
//       fetch(`https://api.openbrewerydb.org/breweries`, {
//         method: 'GET',
//       })
//         .then(result => {
//           console.log(result.json());
//           return result.json();
//         })
//         .then(jsonResult => {
//           console.log("d ",jsonResult);
//           dispatch(fetchProductsSuccess(jsonResult));
//         }),
//       error => console.log(error),
//     );
//   };
// }

export const fetchProducts = async (dispatch)=> {
  try{
  const response = await fetch(`https://api.openbrewerydb.org/breweries`);
  if(response && response.status === 200){
    const data = await response.json();
    console.log(data);
    if (data && data.status === "SUCCESS"){
      dispatch(fetchProductsSuccess(data));
    }
    else {
      throw new Error("unable to fetch")
    }
  }else{
    throw new Error("unablle to fetch details")
  }
}catch(e){
console.log("d")
}
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
