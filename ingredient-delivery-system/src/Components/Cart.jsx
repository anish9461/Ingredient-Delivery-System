import React, {Component} from 'react';



const Cart = ({name,price,quantity}) => (
    
    <div>
        {name} - &#36;{price} &nbsp;  x{quantity}  
    </div>
)


export default Cart;