import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import accountReducer from "./features/account/accountSlice.js";
import customerReducer from "./features/customers/customerSlice.js";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
