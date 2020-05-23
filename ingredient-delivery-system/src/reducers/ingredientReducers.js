import {GET_INGREDIENTS} from '../actions/types';

const initialState = {
    ingredients: [],
    ingredient: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_INGREDIENTS:
            console.log(" get ingredient reducer")
            return {
                ...state,
                ingredients: action.payload
            }
        default:
            return state;
    }
}