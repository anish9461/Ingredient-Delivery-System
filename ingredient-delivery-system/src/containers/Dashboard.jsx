import React, {Component} from "react";
import MapComponent from "../Components/MapComponent";
import "../css/dashboard.css";
import bgimage from "../images/restaurant-1.jpg";
import IngredientList from "./IngredientContainer";
import {connect} from 'react-redux';
import {getStores,resetStore} from '../actions/storesActions';
import {resetCart} from '../actions/cartActions';
import IngredientContainer from "./IngredientContainer";
import CartsContainer from "./CartsContainer";

class Dashboard extends Component{
    
    //create object for restaurants with location co-ordinates and estimation time. Explain in document that estimation time will differ. currently hard-coded

   

    componentDidMount(){
        this.props.getStores();
    }

    render(){
        return(
            <div className="dashboard">
                <h1>Chefman Ingredient Delivery System</h1>
                
                <MapComponent />
                <div>
                <button className='buttonreset' onClick={() => {this.props.resetCart();this.props.resetStore()}}>
                RESET
                </button>
                </div>
                <IngredientContainer />
           
                
                <CartsContainer />
                
                </div>
            
        )
    }
}

const mapStateToProps = state => ({
    retailStores: state.retailStores.rStores,
    selectedStore: state.retailStores.selectedStore
})

export default connect(mapStateToProps,{getStores,resetCart,resetStore})(Dashboard);