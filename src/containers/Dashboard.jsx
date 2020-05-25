
///////////////////////////////////////////////////////////////////////////////////
// Dashboard.jsx - Wrapper for Ingredient Delivery System components             //
// ver 1.0                                                                       //
// Language:    Javascript, React Framework                                      //
// Ingredient Delivery System                                                    //
// Source Author:      Anish Nesarkar,Syracuse University                        //
///////////////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import MapComponent from "../Components/MapComponent";
import "../css/dashboard.css";
import { connect } from "react-redux";
import { getStores, resetStore } from "../actions/storesActions";
import { resetCart } from "../actions/cartActions";
import IngredientContainer from "./IngredientContainer";
import CartsContainer from "./CartsContainer";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getStores();
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Chefman Ingredient Delivery System</h1>

        <MapComponent />
        <div>
          <button
            className="buttonreset"
            onClick={() => {
              this.props.resetCart();
              this.props.resetStore();
            }}
          >
            RESET
          </button>
        </div>
        <IngredientContainer />

        <CartsContainer />
      </div>
    );
  }
}

Dashboard.propTypes = {
  resetCart: PropTypes.func.isRequired,
  resetStore: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  retailStores: state.retailStores.rStores,
  selectedStore: state.retailStores.selectedStore,
});

export default connect(mapStateToProps, { getStores, resetCart, resetStore })(
  Dashboard
);
