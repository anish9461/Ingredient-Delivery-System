import React, {Component} from "react";
import MapComponent from "./MapComponent";
import "../css/dashboard.css";
import bgimage from "../images/restaurant-1.jpg";
import IngredientList from "./IngredientList";


class Dashboard extends Component{
    
    //create object for restaurants with location co-ordinates and estimation time. Explain in document that estimation time will differ. currently hard-coded

   


    render(){
        return(
            <div className="dashboard">
                 
                <MapComponent></MapComponent>
              
                </div>
            
        )
    }
}

export default Dashboard;