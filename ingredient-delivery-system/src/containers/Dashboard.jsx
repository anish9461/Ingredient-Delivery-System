import React, {Component} from "react";
import MapComponent from "../Components/MapComponent";
import "../css/dashboard.css";
import bgimage from "../images/restaurant-1.jpg";
import IngredientList from "./IngredientContainer";
import {connect} from 'react-redux';
import {getStores} from '../actions/storesActions';
import IngredientContainer from "./IngredientContainer";

class Dashboard extends Component{
    
    //create object for restaurants with location co-ordinates and estimation time. Explain in document that estimation time will differ. currently hard-coded

   

    componentDidMount(){
        this.props.getStores();
    }

    render(){
console.log(this.props.retailStores)

        return(
            <div className="dashboard">
                 
                <MapComponent />
                <hr/>
                <IngredientContainer />
              
                </div>
            
        )
    }
}

const mapStateToProps = state => ({
    retailStores: state.retailStores.rStores
})

export default connect(mapStateToProps,{getStores})(Dashboard);