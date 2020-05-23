import {GET_INGREDIENTS, GET_STORES} from '../actions/types';

const initialState = {
    rStores: [],
    selectedStore: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_STORES:
            console.log("reducer to get stores")
            return {
                ...state,
                rStores: action.payload
            }
        default:
            return state;
    }
}