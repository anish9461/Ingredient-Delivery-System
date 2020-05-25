///////////////////////////////////////////////////////////////////////////////////
// store_api.js - js file to fetch sample data                                   //
// ver 1.0                                                                       //
// Language:    Javascript, React Framework                                      //
// Ingredient Delivery System                                                    //
// Source Author:      Anish Nesarkar,Syracuse University                        //
///////////////////////////////////////////////////////////////////////////////////

import _store_ingredients from './store_ingredient_data.json'

export default {
   getStores : (cb, timeout) => setTimeout(() => cb(_store_ingredients), timeout)
}