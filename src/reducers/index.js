
import { combineReducers } from "redux";
import storesReducers from "./storesReducers";
import cartReducers from "./cartReducer";

export default combineReducers({
  retailStores: storesReducers,
  cartReducer: cartReducers,
});
