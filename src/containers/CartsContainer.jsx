
///////////////////////////////////////////////////////////////////////////////////
// CartsContainer.jsx - Wrapper for Cart Items with Total and checkout button    //
// ver 1.0                                                                       //
// Language:    Javascript, React Framework                                      //
// Ingredient Delivery System                                                    //
// Source Author:      Anish Nesarkar,Syracuse University                        //
///////////////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import { connect } from "react-redux";
import { getCartItems, removeFromCart, checkout } from "../actions/cartActions";
import Cart from "../Components/Cart";
import "../css/cart.css";
import PropTypes from "prop-types";

//store shopid, ingredient name and quantity in carts store. get shop id from selected store
class CartsContainer extends Component {
  render() {
    let cartItems = this.props.cartItems;
    let total;
    if (this.props.cartItems.length !== 0) {
      cartItems = cartItems.filter(
        (item) => item.storeId === this.props.selectedStore.storeId
      );
      total = cartItems
        .map((item) => item.ingredientPrice * item.ingredientQuantity)
        .reduce((a, b) => a + b, 0);
      if (cartItems.length !== 0) {
        return (
          <div style={{ textAlign: "center" }}>
            <h2> Cart </h2>
            <table>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
              </thead>
              <tbody>
              {cartItems.map((item) => {
                return (
                  <Cart
                    name={item.ingredientName}
                    price={item.ingredientPrice * item.ingredientQuantity}
                    quantity={item.ingredientQuantity}
                    key={item.ingredientId}
                  />
                );
              })}

              <tr>
                <td></td>
                <td></td>
                <td style={{ color: "red" }}>Total : &#36;{total}</td>
              </tr>
              </tbody>
            </table>
            <button
              className="button checkout"
              onClick={() => {
                this.props.checkout(this.props.selectedStore.storeId);
                window.alert("Checkout successful!!!");
              }}
            >
              CHECKOUT
            </button>
          </div>
        );
      } else {
        return (
          <div>
            <h3>Please add Items to the Cart</h3>
          </div>
        );
      }
    } else {
      if (Object.keys(this.props.selectedStore).length !== 0) {
        return (
          <div>
            <h3>Please add Items to the Cart</h3>
          </div>
        );
      } else {
        return (
          <div>
            <h3>Please Select the Store to add items to the Cart</h3>
          </div>
        );
      }
    }
  }
}

CartsContainer.propTypes = {
  getCartItems: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      storeId: PropTypes.number.isRequired,
      ingredientName: PropTypes.string.isRequired,
      ingredientPrice: PropTypes.number.isRequired,
      ingredientQuantity: PropTypes.number.isRequired,
      ingredientId: PropTypes.number.isRequired,
    })
  ),
  selectedStore: PropTypes.shape({
    storeId: PropTypes.number,
    storeName: PropTypes.string,
    storeLocation: PropTypes.array,
    estimateDelivery: PropTypes.string,
    storeIngredients: PropTypes.arrayOf(
      PropTypes.shape({
        ingredientId: PropTypes.number.isRequired,
        ingredientName: PropTypes.string.isRequired,
        ingredientPrice: PropTypes.number.isRequired,
      })
    ),
  }),
};

const mapStateToProps = (state) => ({
  cartItems: state.cartReducer.cartItems,
  selectedStore: state.retailStores.selectedStore,
});

export default connect(mapStateToProps, {
  getCartItems,
  removeFromCart,
  checkout,
})(CartsContainer);

