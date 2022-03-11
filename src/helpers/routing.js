import Home from "../pages/Home"
import Cart from "../pages/Cart"
import Product from "../pages/Product"
import ProductPage from "../pages/products/ProductPage"

const routing = [
	{
		id: 1,
		path: "/",
		component: Home,
	},
	{
		id: 2,
		path: "/cart",
		component: Cart,
	},
	{
		id: 3,
		path: "/products/:slug",
		component: Product,
	},
	{
		id: 3,
		path: "/product/:slug",
		component: ProductPage,
	},
]
export default routing
