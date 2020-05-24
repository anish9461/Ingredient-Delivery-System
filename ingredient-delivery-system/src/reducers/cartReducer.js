import {ADD_TO_CART, REMOVE_FROM_CART, GET_CART_ITEMS, CHECKOUT} from '../actions/types';

const initialState = {
    cartItems: [],
}

export default function(state = initialState.cartItems, action){
    console.log("In carts reducer")
    switch(action.type){
        case ADD_TO_CART:
            console.log("reducer to add items")
            console.log(state)
            console.log("action items")
            console.log(action.payload.storeId)
            let addCartIndex = state.findIndex(item => (item.storeId == action.payload.storeId) && (item.ingredientId == action.payload.ingredientId))
            console.log("Is item present ",addCartIndex)
            //If present, increment the quantity else add item to the cart
            if(addCartIndex == -1){
                
                state = [
                    ...state,
                    action.payload
                ]
                return [...state];
            }
            state[addCartIndex].ingredientQuantity++;
            return [...state];
        case REMOVE_FROM_CART:
            let CartIndex = state.findIndex(item => (item.storeId == action.payload.storeId) && (item.ingredientId == action.payload.ingredientId))
            console.log("Is item present ",CartIndex)
            //If present, increment the quantity else add item to the cart
            if(CartIndex == -1){
                return [...state]             
            }
            if(state[CartIndex].ingredientQuantity == 0){
                state.splice(CartIndex,1)
                return [...state]
            }
            state[CartIndex].ingredientQuantity--;
            if(state[CartIndex].ingredientQuantity == 0){
                state.splice(CartIndex,1)
            }
            return [...state];
        
        case GET_CART_ITEMS:
            console.log("returning cart items")
            return {...state};
        
        case CHECKOUT:
            state = []
            return [...state]
        default:
            return [...state];
    }
}

