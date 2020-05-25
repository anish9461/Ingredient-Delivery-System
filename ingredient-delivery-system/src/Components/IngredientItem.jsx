import React from "react";
import PropTypes from "prop-types";
import "../css/ingredient.css";

const IngredientItem = ({ ingredient, price }) => (
  <div>
    {ingredient} &nbsp; &#36;{price}
  </div>
);

IngredientItem.propTypes = {
  ingredient: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default IngredientItem;
