import React, { Component } from "react";
import "../css/dashboard.css";
import { connect } from "react-redux";
import { getStore } from "../actions/storesActions";
import Ingredient from "../Components/Ingredient";
import "../css/ingredient.css";

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

const mapStateToProps = (state) => ({
  selectedStore: state.retailStores.selectedStore,
});

export default connect(mapStateToProps, { getStore })(IngredientContainer);
