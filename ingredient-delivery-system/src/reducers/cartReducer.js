import {ADD_TO_CART, REMOVE_FROM_CART, GET_CART_ITEMS, CHECKOUT, GET_INGREDIENT_QUANTITY} from '../actions/types';

const initialState = {
    cartItems: [],
    ingredientQuantity: 0
}

export default function(state = initialState, action){
    let cartItems
    switch(action.type){
        case ADD_TO_CART:
 
            let addCartIndex = state.cartItems.findIndex(item => (item.storeId == action.payload.storeId) && (item.ingredientId == action.payload.ingredientId))
            console.log(addCartIndex)
            //If present, increment the quantity else add item to the cart
            
            if(addCartIndex == -1){
                
                cartItems = [
                    ...state.cartItems,
                    action.payload
                ]
                return {...state,cartItems};
            }
            console.log("state cart items")
            console.log(state.cartItems)
            state.cartItems[addCartIndex].ingredientQuantity++;
            cartItems = [...state.cartItems]
            console.log("cart items in reducer")
            console.log(cartItems)
            return {...state,cartItems};
        case REMOVE_FROM_CART:
            let CartIndex = state.cartItems.findIndex(item => (item.storeId == action.payload.storeId) && (item.ingredientId == action.payload.ingredientId))
            
            //If present, increment the quantity else add item to the cart
            if(CartIndex == -1){
                console.log("removing herer")
                cartItems = [...state.cartItems]
                return {...state,cartItems}             
            }
            if(state.cartItems[CartIndex].ingredientQuantity == 0){
                state.cartItems.splice(CartIndex,1)
                cartItems = [...state.cartItems]
                return {...state,cartItems}
            }
            if(state.cartItems[CartIndex].ingredientQuantity == 1){
                //state.cartItems[CartIndex].ingredientQuantity--;
                state.cartItems.splice(CartIndex,1)
            
                cartItems = [...state.cartItems]
                return {...state,cartItems}
            }
            state.cartItems[CartIndex].ingredientQuantity--;
            
            cartItems = [...state.cartItems]
            return {...state,cartItems};       
        case GET_CART_ITEMS:
            return {...state};
        case GET_INGREDIENT_QUANTITY:
            console.log(action.payload)
            console.log(state.cartItems)
            let ingredientIndex = state.cartItems.findIndex(item => (item.storeId == action.payload.storeId) && (item.ingredientId == action.payload.ingredientId))
            if(ingredientIndex==-1){
                return {...state,ingredientQuantity: 0}
            }
            let quantity =  state.cartItems[ingredientIndex].ingredientQuantity;
            return {...state,ingredientQuantity: quantity}
        case CHECKOUT:
            state.cartItems.filter(item => item.storeId == action.payload).map(item => item.ingredientQuantity = 1)
            state.cartItems = state.cartItems.filter(item => item.storeId != action.payload)
            console.log(cartItems)
            console.log(state.cartItems)
            cartItems = [...state.cartItems]
            //state.cartItems = state.cartItems.filter(item => item.storeId == action.payload).map(item => item.ingredientQuantity = 1).filter(item => item.storeId == action.payload)
            //console.log(state.cartItems)
            return {...state,cartItems}
        default:
            return {...state};
    }
}

