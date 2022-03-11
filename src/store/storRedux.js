import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import CartReducer from "./allReducer.js/CartReducer"
import CategoriesReducer from "./allReducer.js/CategoriesReducer"
import LanguageReducer from "./allReducer.js/LanguageReducer"
import ProductReducer from "./allReducer.js/ProductReducer"
import ProductsReducer from "./allReducer.js/ProductsReducer"
const reducers = combineReducers({
	cart: CartReducer,
	categories: CategoriesReducer,
	products: ProductReducer,
	filteredProducts: ProductsReducer,
	lang: LanguageReducer
})
const store = createStore(reducers, applyMiddleware(thunk))

export default store
