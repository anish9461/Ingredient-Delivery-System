import React,{Component} from 'react';

import {connect} from 'react-redux';
import {getStore} from '../actions/storesActions';

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





const IngredientItem = ({ingredient,price,quantity}) => (
    
    <div>
        {ingredient} - &#36;{price}       {quantity}
    </div>
)

// const Ingredient = ({ingredient,price,quantity,storeId}) => (
    
//     // let cartItem = {
//     //     "storeId":storeId
//     // }
// //console.log("object")
//     IngredientItem({ingredient,price,quantity})
//     // <div>
//     //     {ingredient} - &#36;{price}       {quantity}
//     //     <div>
//     //                    <button style={{marginRight: 15}}
//     //                    onClick={Clicked()}>
//     //                        Add to Cart
//     //                    </button>
//     //                    <button>
//     //                        Remove from Cart
//     //                    </button>
//     //                    </div>
//     // </div>
// )
// const mapStateToProps = state => ({
//     selectedStore: state.retailStores.selectedStore
// })

// export default connect(mapStateToProps,{getStore})(Ingredient);
export default IngredientItem;
