import {GET_INGREDIENTS, GET_STORES} from './types';
import store_shop from '../api/store_shop';

export const getStores = () => dispatch => {
    console.log("fetching stores in actions")
    store_shop.getStores(Ing =>
        dispatch({
            type: GET_STORES,
            payload: Ing
        }))
}