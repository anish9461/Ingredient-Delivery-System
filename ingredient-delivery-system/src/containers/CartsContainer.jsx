import React, {Component} from "react";
import {connect} from 'react-redux';
import {getCartItems,removeFromCart} from '../actions/cartActions';
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
    console.log("Cart items")
    console.log(this.props.cartItems)
    let cartItems = this.props.cartItems;
    if(this.props.cartItems.length !== 0){
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
                 <h4>Total : </h4>
                 <hr style={{width:'100px'}} /> 
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

}

const mapStateToProps = state => ({
    cartItems: state.cartReducer
})

export default connect(mapStateToProps,{getCartItems,removeFromCart})(CartsContainer);