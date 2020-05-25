//////////////////////////////////////////////////////////////////////////
// Map.jsx - Component to display the restaurants on the google map     //
// ver 1.0                                                              //
// Language:    Javascript, React Framework                             //
// FoodDine-InReady , CSE 687 - Object Oriented Design, Fall2019        //
// Source Author:      Anish Nesarkar,Suket Singh, Syracuse University  //
//////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import mapmarker from "../marker.svg";
//import axios from "axios";
import {connect} from 'react-redux';
import {getStores, selectStore} from '../actions/storesActions';
import '../css/tooltip.css';



//Access token from the MapboxGl API
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYW5pc2hua3IiLCJhIjoiY2szY2dyN2pxMG1hdDNvcGJ6Nm40eDhnbyJ9.hDogBTynjbFQ_K4y7AcaFg"
});

//map component class
class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.markerClick = this.markerClick.bind(this);
    this.state = {
      center: [-0.1148677, 51.5139573]
    };
  }

//Component did mount
//create the markers
componentDidMount(){
    this.props.getStores();
}

//   //this function is executed before rendering the component
//   componentWillMount() {
//     this.getRestaurants();
//     console.log("component will mount");
//   }

  // get the ingredient list on click. Send the store name
  markerClick(e) {

      let rstore = this.props.retailStores.filter(res => 
        res.storeId == e.target.id);
 
      this.props.selectStore(rstore[0]);
    // sessionStorage.setItem("restaurantName", restaurant[0].name);
    // this.props.history.push("/restaurant2d", restaurant[0]);
    // this.props.history.push('/restaurant2d');
  }

//   //fetch the restaurants from the database
//   getRestaurants = async () => {
//     let res = await axios.get(
//       "https://fooddinein--ready.herokuapp.com/restaurant"
//     );
//     this.setState({
//       data: res.data
//     });
//   };

  //render the component
  render() {
    {
      return (
        
        <Map
          center={[-74.1436, 41.0886]}
          style="mapbox://styles/mapbox/streets-v9"

          containerStyle={{
            height: "500px",
            width: "60%",
            marginLeft: "20%"
          }}
        >
          {/* : map the markers on the map */}
         
              {/* <Marker
                style={{ cursor: "pointer" }}
                coordinates={[-74.1630, 41.1087]}
                anchor="bottom"
                onClick={this.markerClick}
              >
                <img
                  id="1"
                  src={mapmarker}
                  height="40"
                  width="40"
                  alt=""
                />
              </Marker> */}
            

              {this.props.retailStores.map(store => {
            return (
              <Marker
              className="tooltip"
                style={{ cursor: "pointer" }}
                coordinates={[store["storeLocation"][0], store["storeLocation"][1]]}
                anchor="bottom"
                onClick={this.markerClick}
                key={store["storeId"]}
              >
                <span class="tooltiptext">Store : {store["storeName"]} Delivery: {store["estimateDelivery"]}</span>
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
}


const mapStateToProps = state => ({
    retailStores: state.retailStores.rStores
})

export default connect(mapStateToProps,{getStores,selectStore})(MapComponent);