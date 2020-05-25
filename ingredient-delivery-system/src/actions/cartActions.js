import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_CART_ITEMS,
  CHECKOUT,
  RESET,
} from "./actionTypes";

export const addToCart = (item) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });
};

export const removeFromCart = (item) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: item,
  });
};

export const getCartItems = () => (dispatch) => {
  dispatch({
    type: GET_CART_ITEMS,
  });
};

export const checkout = (item) => (dispatch) => {
  dispatch({
    type: CHECKOUT,
    payload: item,
  });
};

export const resetCart = () => (dispatch) => {
  dispatch({
    type: RESET,
  });
};
