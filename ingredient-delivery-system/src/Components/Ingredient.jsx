///////////////////////////////////////////////////////////////////////////////////
// Ingredient.jsx - Wrapper for Ingredients with add and remove buttons          //
// ver 1.0                                                                       //
// Language:    Javascript, React Framework                                      //
// Ingredient Delivery System                                                    //
// Source Author:      Anish Nesarkar,Syracuse University                        //
///////////////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import { connect } from "react-redux";
import IngredientItem from "../Components/IngredientItem";
import { addToCart, removeFromCart } from "../actions/cartActions";
import "../css/ingredient.css";
import PropTypes from "prop-types";

class Ingredient extends Component {
  render() {
    let quantity = 0;
    if (this.props.cartItems.length !== 0) {
      let item = this.props.cartItems.filter(
        (item) =>
          item.storeId === this.props.storeId &&
          item.ingredientId === this.props.ingredientId
      );
      quantity = item[0] === undefined ? 0 : item[0]["ingredientQuantity"];
    }
    return (
      <div className="column">
        <div className="card">
          <IngredientItem
            ingredient={this.props.ingredient}
            price={this.props.price}
          />

          <div>
            <button
              className="button"
              style={{ marginRight: 15 }}
              onClick={() => this.props.removeFromCart(this.props.cartItem)}
            >
              -
            </button>
            <div className="quantity">{quantity}</div>
            <button
              className="button"
              onClick={() => this.props.addToCart(this.props.cartItem)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Ingredient.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      storeId: PropTypes.number.isRequired,
      ingredientName: PropTypes.string.isRequired,
      ingredientPrice: PropTypes.number.isRequired,
      ingredientQuantity: PropTypes.number.isRequired,
      ingredientId: PropTypes.number.isRequired,
    })
  ),
};

const mapStateToProps = (state) => ({
  cartItems: state.cartReducer.cartItems,
});

export default connect(mapStateToProps, { addToCart, removeFromCart })(
  Ingredient
);
