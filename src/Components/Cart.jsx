
///////////////////////////////////////////////////////////////////////////////////
// Cart.jsx - Display the items added to cart                                    //
// ver 1.0                                                                       //
// Language:    Javascript, React Framework                                      //
// Ingredient Delivery System                                                    //
// Source Author:      Anish Nesarkar,Syracuse University                        //
///////////////////////////////////////////////////////////////////////////////////

import React from "react";
import "../css/cart.css";
import PropTypes from "prop-types";

const Cart = ({ name, price, quantity }) => (
  <tr>
    <td>{name}</td>
    <td>{quantity}</td>
    <td>&#36;{price}</td>
  </tr>
);

Cart.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default Cart;

