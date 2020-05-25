import {GET_INGREDIENTS, GET_STORES, SELECTED_STORE, GET_STORE} from '../actions/types';

const initialState = {
    rStores: [],
    selectedStore: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_STORES:
      
            return {
                ...state,
                rStores: action.payload
            }
        case SELECTED_STORE:
    
            return {
                ...state,
                selectedStore: action.payload
            }
        case GET_STORE:
        
            return {
                ...state,
                selectedStore: action.payload
            }
        default:
            return state;
    }
}

