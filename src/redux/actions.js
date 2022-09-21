export function getCountries(countries) {
  return {
    type: "GET_COUNTRIES",
    payload: {
      countries,
    },
  };
}
export function searchForKeyword(keyword) {
  return {
    type: "SEARCH_KEYWORD",
    payload: keyword,
  };
}
export function addToCart(country) {
  return {
    type: "ADD_TO_CART",
    payload: {
      country,
    },
  };
}
export function deleteFromCartList(country) {
  return {
    type: "DELETE_FROM_CART_LIST",
    payload: {
      country,
    },
  };
}

export function backToCart(country) {
  return {
    type: "BACK_TO_CART",
    payload: {
      country,
    },
  };
}

export function fetchCountries() {
  return (dispatch) => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => dispatch(getCountries(data)));
  };
}
