///////////////////////////////////////////////////////////////////////////////////
// MapComponent.jsx - Component to display the retail stores on the google map   //
// ver 1.0                                                                       //
// Language:    Javascript, React Framework                                      //
// Ingredient Delivery System                                                    //
// Source Author:      Anish Nesarkar,Syracuse University                        //
///////////////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import mapmarker from "../marker.svg";
import { connect } from "react-redux";
import { getStores, selectStore } from "../actions/storesActions";
import "../css/tooltip.css";
import PropTypes from "prop-types";

//Access token from the MapboxGl API. Should be used as environment variable
const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAP,
});

//map component class
class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.markerClick = this.markerClick.bind(this);
  }

  componentDidMount() {
    this.props.getStores();
  }

  // get the ingredient list on click. Send the store name
  markerClick(e) {
    let rstore = this.props.retailStores.filter(
      (res) => res.storeId === parseInt(e.target.id)
    );

    this.props.selectStore(rstore[0]);
  }

  //render the component
  render() {
    return (
      <Map
        center={[-74.1436, 41.0886]}
        style={"mapbox://styles/mapbox/streets-v9"}
        containerStyle={{
          height: "500px",
          width: "60%",
          marginLeft: "20%",
        }}
      >
        {this.props.retailStores.map((store) => {
          return (
            <Marker
              className="tooltip"
              style={{ cursor: "pointer" }}
              coordinates={[
                store["storeLocation"][0],
                store["storeLocation"][1],
              ]}
              anchor="bottom"
              onClick={this.markerClick}
              key={store["storeId"]}
            >
              <span className="tooltiptext">
                Store : {store["storeName"]} Delivery:{" "}
                {store["estimateDelivery"]}
              </span>
              <img
                id={store["storeId"]}
                src={mapmarker}
                height="40"
                width="40"
                alt=""
              />
            </Marker>
          );
        })}
      </Map>
    );
  }
}

MapComponent.propTypes = {
  getStores: PropTypes.func.isRequired,
  retailStores: PropTypes.arrayOf(
    PropTypes.shape({
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
  ),
};

const mapStateToProps = (state) => ({
  retailStores: state.retailStores.rStores,
});

export default connect(mapStateToProps, { getStores, selectStore })(
  MapComponent
);
