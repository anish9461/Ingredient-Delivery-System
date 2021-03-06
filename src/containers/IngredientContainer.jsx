
///////////////////////////////////////////////////////////////////////////////////
// IngredientContainer.jsx - Wrapper for Ingredients                             //
// ver 1.0                                                                       //
// Language:    Javascript, React Framework                                      //
// Ingredient Delivery System                                                    //
// Source Author:      Anish Nesarkar,Syracuse University                        //
///////////////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import "../css/dashboard.css";
import { connect } from "react-redux";
import { getStore } from "../actions/storesActions";
import Ingredient from "../Components/Ingredient";
import "../css/ingredient.css";
import PropTypes from "prop-types";

class IngredientContainer extends Component {
  render() {
    let ingredients;
    if (this.props.selectedStore.storeIngredients) {
      ingredients = this.props.selectedStore.storeIngredients;
      let cartItem;
      return (
        <div style={{ marginBottom: 20 }}>
          <h2> Ingredients </h2>
          <h3>Store {this.props.selectedStore.storeName} </h3>
          <div className="row">
            {ingredients.map((Ing) => {
              cartItem = {
                storeId: this.props.selectedStore.storeId,
                ingredientName: Ing.ingredientName,
                ingredientPrice: Ing.ingredientPrice,
                ingredientQuantity: 1,
                ingredientId: Ing.ingredientId,
              };
              return (
                <Ingredient
                  ingredient={Ing.ingredientName}
                  price={Ing.ingredientPrice}
                  quantity={Ing.ingredientQuantity}
                  cartItem={cartItem}
                  ingredientId={Ing.ingredientId}
                  storeId={this.props.selectedStore.storeId}
                  key={Ing.ingredientId}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

IngredientContainer.propTypes = {
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
  selectedStore: state.retailStores.selectedStore,
});

export default connect(mapStateToProps, { getStore })(IngredientContainer);

