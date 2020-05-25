import React, {Component} from 'react';
import '../css/cart.css';


const Cart = ({name,price,quantity}) => (
    

            <tr>
                <th>{name}</th>
                <th>{quantity}</th>
                <th>&#36;{price}</th>
            </tr>
       
 
)


export default Cart;