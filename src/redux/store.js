import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import countryReducer from "./reducers/countryReducer";

const storeFactory = () => {
  const middleware = [thunk];
  const reduxStore = createStore(
    countryReducer,
    composeWithDevTools(
      applyMiddleware(...middleware)
      
    )
  );

  return reduxStore;
};

export default storeFactory;
