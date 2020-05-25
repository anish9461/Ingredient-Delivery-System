///////////////////////////////////////////////////////////////////////////////////
// storesAction.js - Actions for store related data                              //
// ver 1.0                                                                       //
// Language:    Javascript, React Framework                                      //
// Ingredient Delivery System                                                    //
// Source Author:      Anish Nesarkar,Syracuse University                        //
///////////////////////////////////////////////////////////////////////////////////

import { GET_STORES, SELECTED_STORE, GET_STORE, RESET } from "./actionTypes";
import store_shop from "../api/store_api";

export const getStores = () => (dispatch) => {
  store_shop.getStores((Ing) =>
    dispatch({
      type: GET_STORES,
      payload: Ing,
    })
  );
};

export const selectStore = (rStore) => (dispatch) => {
    dispatch({
    type: SELECTED_STORE,
    payload: rStore,
  });
};

export const getStore = () => (dispatch) => {
  dispatch({
    type: GET_STORE,
  });
};

export const resetStore = () => (dispatch) => {
  dispatch({
    type: RESET,
  });
};
