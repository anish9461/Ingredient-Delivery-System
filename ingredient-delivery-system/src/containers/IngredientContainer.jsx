import React, {Component} from "react";
import "../css/dashboard.css";
import bgimage from "../images/restaurant-1.jpg";
import {connect} from 'react-redux';
import {getStore} from '../actions/storesActions';
import Ingredient from "../Components/Ingredient";
import {addToCart,removeFromCart} from '../actions/cartActions';

//list the ingredients used for the stores with the prices
class IngredientContainer extends Component{
    


    render(){
        console.log("Selected store");
        console.log(this.props.selectedStore)
        let ingredients = this.props.selectedStore.storeIngredients;
        console.log("Ingredients")
        console.log(ingredients)
        
        if(ingredients){
            let cartItems = ingredients.map(Ing =>(
                {storeId:this.props.selectedStore.storeId,ingredientName:Ing.ingredientName, ingredientPrice:Ing.ingredientPrice, ingredientQuantity:Ing.ingredientQuantity}))
            console.log("Cart items")
            console.log(cartItems)
            let cartItem;
        return(
           <div style={{marginBottom: 20}}>
               {ingredients.map(Ing => {
                   cartItem = {
                    storeId:this.props.selectedStore.storeId,ingredientName:Ing.ingredientName, ingredientPrice:Ing.ingredientPrice, ingredientQuantity:1, ingredientId:Ing.ingredientId
                   }
                   return(
                       <div>
                       <Ingredient 
                       ingredient={Ing.ingredientName}
                       price={Ing.ingredientPrice}
                       quantity={Ing.ingredientQuantity}
                       cartItem={cartItem}
                       key={Ing.ingredientId}
                       />
                       {/* <div>
                       <button style={{marginRight: 15}}
                       onClick={() => addToCart()}>
                           Add to Cart
                       </button>
                       <button>
                           Remove from Cart
                       </button>
                       </div> */}
                       </div>
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