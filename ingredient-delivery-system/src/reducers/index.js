import {combineReducers} from 'redux';
import storesReducers from './storesReducers';

export default combineReducers({
    retailStores : storesReducers
})