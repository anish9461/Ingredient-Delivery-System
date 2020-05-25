import React, { Component } from "react";
import "../css/dashboard.css";
import { connect } from "react-redux";
import { getStore } from "../actions/storesActions";
import Ingredient from "../Components/Ingredient";
import "../css/ingredient.css";
import PropTypes from 'prop-types';

class IngredientContainer extends Component {
  render() {
    let ingredients = this.props.selectedStore.storeIngredients;
    if (ingredients) {
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
        storeId: PropTypes.number.isRequired,
        storeName: PropTypes.string.isRequired,
        storeLocation: PropTypes.array.isRequired,
        estimateDelivery: PropTypes.string.isRequired,
        storeIngredients: PropTypes.arrayOf(
          PropTypes.shape({
            ingredientId: PropTypes.number.isRequired,
            ingredientName: PropTypes.string.isRequired,
            ingredientPrice: PropTypes.number.isRequired,
          })
        ),
      })
}

const mapStateToProps = (state) => ({
  selectedStore: state.retailStores.selectedStore,
});

export default connect(mapStateToProps, { getStore })(IngredientContainer);
