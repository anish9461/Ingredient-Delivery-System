import React, { Component } from "react";
import { connect } from "react-redux";
import IngredientItem from "../Components/IngredientItem";
import { addToCart, removeFromCart } from "../actions/cartActions";
import "../css/ingredient.css";

class Ingredient extends Component {
  render() {
    let quantity = 0;
    if (this.props.cartItems.length != 0) {
      let item = this.props.cartItems.filter(
        (item) =>
          item.storeId == this.props.storeId &&
          item.ingredientId == this.props.ingredientId
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

const mapStateToProps = (state) => ({
  cartItems: state.cartReducer.cartItems,
});

export default connect(mapStateToProps, { addToCart, removeFromCart })(
  Ingredient
);
