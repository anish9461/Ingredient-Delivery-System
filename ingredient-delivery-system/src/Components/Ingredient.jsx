import React,{Component} from 'react';

import {connect} from 'react-redux';
import {getStore} from '../actions/storesActions';

//list the ingredients used for the store with the prices
class Ingredient extends Component{
    


    render(){
        // console.log("Selected store");
        // console.log(this.props.selectedStore)
        
        return(
           <div>
               Hello
           </div>
            
        )
    }
}

// const mapStateToProps = state => ({
//     selectedStore: state.retailStores.selectedStore
// })

// export default connect(mapStateToProps,{getStore})(Ingredient);
export default Ingredient;