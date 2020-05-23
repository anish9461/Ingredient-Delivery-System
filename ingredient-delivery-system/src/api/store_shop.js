import _store_ingredients from './store_ingredient_data.json'

export default {
   getStores : (cb, timeout) => setTimeout(() => cb(_store_ingredients), timeout)
}