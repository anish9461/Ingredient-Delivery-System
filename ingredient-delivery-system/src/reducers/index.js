import {combineReducers} from 'redux';
import storesReducers from './storesReducers';
import ingredientReducers from './ingredientReducers';
import cartReducers from './cartReducer';

export default combineReducers({
    retailStores : storesReducers,
    ingredients : ingredientReducers,
    cartReducer : cartReducers
})