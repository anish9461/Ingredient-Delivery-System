
///////////////////////////////////////////////////////////////////////////////////
// IngredientItem.jsx - Display the available ingredients at store               //
// ver 1.0                                                                       //
// Language:    Javascript, React Framework                                      //
// Ingredient Delivery System                                                    //
// Source Author:      Anish Nesarkar,Syracuse University                        //
///////////////////////////////////////////////////////////////////////////////////

import React from "react";
import PropTypes from "prop-types";
import "../css/ingredient.css";

const IngredientItem = ({ ingredient, price }) => (
  <div>
    {ingredient} &nbsp; &#36;{price}
  </div>
);

IngredientItem.propTypes = {
  ingredient: PropTypes.string,
  price: PropTypes.number,
};


export default IngredientItem;
