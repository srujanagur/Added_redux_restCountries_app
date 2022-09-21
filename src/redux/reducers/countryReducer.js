const initialState = {
  keyword: "",
  countries: [],
  searchForKeyword: [],
  cart: [],
};
export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES": {
      return {
        ...state,
        countries: action.payload.countries,
        searchForKeyword: action.payload.countries,
      };
    }
    case "SEARCH_KEYWORD": {
      const keyword = action.payload;
      let filteredData = state.countries.filter((country) => {
        return (
          country.name.common.toLowerCase().search(keyword.toLowerCase()) !== -1
        );
      });
      return {
        ...state,
        searchForKeyword: filteredData,
        keyword: keyword,
      };
    }
    case "ADD_TO_CART": {
      const { country } = action.payload;
      return {
        ...state,
        cart: [...state.cart, country],
      };
    }
    case "DELETE_FROM_CART_LIST": {
      const { country } = action.payload;
      return {
        ...state,
        cart: state.cart.filter(function (item) {
          return item !== country;
        }),
      };
    }

    case "BACK_TO_CART": {
      const { country } = action.payload;
      return {
        ...state,
        cart: state.cart.filter(function (cartItem) {
          return cartItem !== country;
        }),
      };
    }
    default:
      return state;
  }
}
