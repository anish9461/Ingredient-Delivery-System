import React, {Component} from "react";
import "../css/dashboard.css";
import bgimage from "../images/restaurant-1.jpg";
import {connect} from 'react-redux';
import {getStore} from '../actions/storesActions';
import Ingredient from "../Components/Ingredient";

//list the ingredients used for the stores with the prices
class IngredientContainer extends Component{
    


    render(){
        console.log("Selected store");
        console.log(this.props.selectedStore)
        let ingredients = this.props.selectedStore.storeIngredients;
        console.log("Ingredients")
        console.log(ingredients)
        if(ingredients){
        return(
           <div>
               {ingredients.map(Ing => {
                   return(
                       <Ingredient 
                       ingredient={Ing.ingredientName}
                       price={Ing.ingredientPrice}
                       quantity={Ing.ingredientQuantity}
                       />
                   )
                   
               })}
           </div>
            
        )
            }
            else{
                return null
            }
    }
}

const mapStateToProps = state => ({
    selectedStore: state.retailStores.selectedStore
})

export default connect(mapStateToProps,{getStore})(IngredientContainer);