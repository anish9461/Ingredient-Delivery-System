import React, {Component} from "react";
import MapComponent from "./MapComponent";
import "../css/dashboard.css";
import bgimage from "../images/restaurant-1.jpg";


//list the ingredients used for the stores with the prices
class IngredientList extends Component{
    


    render(){
        return(
            <div className="bg-image">
          <img src={bgimage} id="b" alt="" height="100vh" />
        </div>
            
        )
    }
}

export default IngredientList;