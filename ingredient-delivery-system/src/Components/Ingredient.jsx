import React,{Component} from 'react';

import {connect} from 'react-redux';
import {getStore} from '../actions/storesActions';
import IngredientItem from '../Components/IngredientItem';
import {addToCart,removeFromCart} from '../actions/cartActions';
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

    render(){
        return(
            <div>
                <IngredientItem 
                ingredient={this.props.ingredient}
                price={this.props.price}
                quantity={this.props.quantity}
                />
                <div>
                       <button style={{marginRight: 15}}
                       onClick={() => this.props.addToCart(this.props.cartItem)}>
                           Add to Cart
                       </button>
                       <button
                       onClick={() => this.props.removeFromCart(this.props.cartItem)}>
                           Remove from Cart
                       </button>
                       </div>
            </div>
        )
    }
}




// const mapStateToProps = state => ({
//     selectedStore: state.retailStores.selectedStore
// })

export default connect(null,{addToCart,removeFromCart})(Ingredient);
//export default Ingredient;