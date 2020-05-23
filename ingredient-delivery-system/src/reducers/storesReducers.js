import {GET_INGREDIENTS, GET_STORES, SELECTED_STORE, GET_STORE} from '../actions/types';

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
        case SELECTED_STORE:
            console.log("reducer to set store")
            return {
                ...state,
                selectedStore: action.payload
            }
        case GET_STORE:
            console.log("reducer to get selected store")
            return {
                ...state,
                selectedStore: action.payload
            }
        default:
            return state;
    }
}

