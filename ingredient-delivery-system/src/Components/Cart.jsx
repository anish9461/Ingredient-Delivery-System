import React from "react";
import "../css/cart.css";
import PropTypes from "prop-types";

const Cart = ({ name, price, quantity }) => (
  <tr>
    <th>{name}</th>
    <th>{quantity}</th>
    <th>&#36;{price}</th>
  </tr>
);

Cart.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Cart;
