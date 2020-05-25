import React,{Component} from 'react';

import {connect} from 'react-redux';
import {getStore} from '../actions/storesActions';
import IngredientItem from '../Components/IngredientItem';
import {addToCart,removeFromCart, getIngredientQuantity} from '../actions/cartActions';
import '../css/ingredient.css';
//list the ingredients used for the store with the prices
// class Ingredient extends Component{
//     render(){
//         // console.log("Selected store");
//         // console.log(this.props.selectedStore)
        
//         return(
//            <div>
//                Hello
//            </div>
            
//         )
//     }
// }

// const Ingredient = ({ingredient,price,quantity,cartItem}) => (
    
//     <div>
//         {ingredient} - &#36;{price}       {quantity}
//         <div>
//                        <button style={{marginRight: 15}}
//                        onClick={() => addToCart(cartItem)}>
//                            Add to Cart
//                        </button>
//                        <button>
//                            Remove from Cart
//                        </button>
//                        </div>
//     </div>
// )

class Ingredient extends Component{
 
    componentDidMount(){
        console.log(this.props.ingredientId)
        const ingredient = {
            storeId: this.props.storeId,
            ingredientId: this.props.ingredientId
        }
        this.props.getIngredientQuantity(ingredient)
    }

    render(){
        console.log('props in ing')
        console.log(this.props.cartItems)
        console.log(this.props.storeId)
        console.log(this.props.ingredient)
        
        let quantity = 0;
        if(this.props.cartItems.length != 0){
            let item = this.props.cartItems.filter(item => (item.storeId == this.props.storeId) && (item.ingredientId == this.props.ingredientId))
            // if(quantity.length != 0){
            //     console.log(quantity[0]["ingredientQuantity"])
            // }
            quantity = item[0]===undefined?0:item[0]["ingredientQuantity"]
        }
        return(
            <div className="column">
                <div className="card">
                <IngredientItem 
                ingredient={this.props.ingredient}
                price={this.props.price}
                />
                
                <div>
                       <button className="button" style={{marginRight: 15}}
                       onClick={() => this.props.addToCart(this.props.cartItem)}>
                          +
                       </button>
                       <div className="quantity">
                       {quantity}
                       </div>
                       <button className="button"
                       onClick={() => this.props.removeFromCart(this.props.cartItem)}>
                           -
                       </button>
                       </div>
                       </div>
            </div>
        )
    }
}




const mapStateToProps = state => ({
    cartItems: state.cartReducer.cartItems
})

export default connect(mapStateToProps,{addToCart,removeFromCart,getIngredientQuantity})(Ingredient);
//export default Ingredient;