import React, { Component } from "react";

import "../css/ingredient.css";

const IngredientItem = ({ ingredient, price }) => (
  <div>
    {ingredient} &nbsp; &#36;{price}
  </div>
);

export default IngredientItem;
