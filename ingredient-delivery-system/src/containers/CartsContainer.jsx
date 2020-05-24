import React, {Component} from "react";
import {connect} from 'react-redux';
import {getCartItems,removeFromCart,checkout} from '../actions/cartActions';
import Cart from '../Components/Cart';

//store shopid, ingredient name and quantity in carts store. get shop id from selected store
class CartsContainer extends Component{

//get cart items from store
//render each cart item in Cart component
// constructor(props){
//     super(props)
//     this.onclick = this.onclick.bind(this);
// }



render(){
    //console.log("Cart items")

    let cartItems = this.props.cartItems;
    let total; 
    if(this.props.cartItems.length != 0){
        console.log(cartItems)
        console.log(this.props.selectedStore.storeId)
        cartItems = cartItems.filter(item => item.storeId == this.props.selectedStore.storeId)
        total = cartItems.map(item => item.ingredientPrice * item.ingredientQuantity).reduce((a,b) => a + b, 0)
        console.log(cartItems)
        if(cartItems.length != 0){
        return(
            <div>
                {cartItems.map(item =>{
                    return(
                    <Cart
                     name={item.ingredientName}
                     price={item.ingredientPrice}
                     quantity={item.ingredientQuantity}
                     />
                    )
                })}
                <hr style={{width:'100px'}} />
                 <h4>Total : {total}</h4>
                 <hr style={{width:'100px'}} />
                 <button onClick={() => {this.props.checkout(this.props.selectedStore.storeId);window.alert("Checkout successful!!!")}}>
                 CHECKOUT    
                 </button> 
            </div>
        )
            }
            else{
                return(
                    <div>
                    <h3>Please add Items to the Cart</h3>
                </div>
                )
            }
    }
    else{
        return(
            <div>
                <h3>Please add Items to the Cart</h3>
            </div>
        )
    }
        
}

}

const mapStateToProps = state => ({
    cartItems: state.cartReducer.cartItems,
    selectedStore: state.retailStores.selectedStore
})

export default connect(mapStateToProps,{getCartItems,removeFromCart,checkout})(CartsContainer);