import React, {Component} from "react";
import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions';

//store shopid, ingredient name and quantity in carts store. get shop id from selected store
class CartsContainer extends Component{

//get cart items from store
//render each cart item in Cart component

render(){
    return(
        <div>
            Cart
        </div>
    )
}

}

export default CartsContainer;