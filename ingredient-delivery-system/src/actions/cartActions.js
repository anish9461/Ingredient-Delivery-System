import {ADD_TO_CART, REMOVE_FROM_CART, GET_CART_ITEMS, CHECKOUT, GET_INGREDIENT_QUANTITY, RESET} from './types';

export const addToCart = item => dispatch => {
    console.log("adding to cart in actions")
    console.log(item)
    dispatch({
        type: ADD_TO_CART,
        payload: item
    })
}

export const removeFromCart = item => dispatch => {
    console.log("remove from cart in actions")
    dispatch({
        type: REMOVE_FROM_CART,
        payload: item
    })
}

export const getCartItems = () => dispatch => {
    dispatch({
        type: GET_CART_ITEMS
    })
}

export const getIngredientQuantity = item => dispatch => {
    dispatch({
        type: GET_INGREDIENT_QUANTITY,
        payload: item
    })
}

export const checkout = item => dispatch => {
    dispatch({
        type: CHECKOUT,
        payload: item
    })
}

export const resetCart = () => dispatch => {
    dispatch({
        type: RESET
    })
}