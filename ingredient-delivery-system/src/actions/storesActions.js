import {GET_STORES, SELECTED_STORE, GET_STORE, RESET} from './actionTypes';
import store_shop from '../api/store_shop';

export const getStores = () => dispatch => {
    store_shop.getStores(Ing =>
        dispatch({
            type: GET_STORES,
            payload: Ing
        }))
}

export const selectStore = rStore => dispatch => {
    dispatch({
        type: SELECTED_STORE,
        payload: rStore
    })
}

export const getStore = () => dispatch => {
    dispatch({
        type: GET_STORE
    })
}

export const resetStore = () => dispatch => {
    dispatch({
        type: RESET
    })
}