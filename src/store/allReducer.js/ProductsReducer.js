import axios from "axios"
const GET_CATEGORY_PRODUCTS = "GET_CATEGORY_PRODUCTS"
const SET_LOADING = "SET_LOADING"
const SET_PRODUCT = "SET_PRODUCT"
const SET_RECOMMENDED_PRODUCTS = "SET_RECOMMENDED_PRODUCTS"
const SET_PAGINATION = "SET_PAGINATION"
const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS"

const initial_state = {
	products: [],
	product: {},
	pagination: {
		total: null,
		current: null,
		per_page: 10,
		total_pages: null,
		next: null,
		previous: null,
	},
	recommendedProducts: [],
	allProducts: [],
	loading: false,
}

const ProductsReducer = (state = initial_state, action) => {
	switch (action.type) {
		case GET_CATEGORY_PRODUCTS:
			state.products = action.products
			return state

		case SET_LOADING:
			state.loading = action.loading
			return state

		case SET_PRODUCT:
			state.product = action.product
			return state

		case SET_RECOMMENDED_PRODUCTS:
			state.recommendedProducts = action.recommendedProducts
			return state

		case SET_ALL_PRODUCTS:
			state.allProducts = action.products
			return state

		case SET_PAGINATION:
			state.pagination = action.pagination
			return state
		default:
			return state
	}
}

export const setCategoryProducts = (payload) => ({
	type: GET_CATEGORY_PRODUCTS,
	products: payload,
})

export const setLoading = (payload) => ({ type: SET_LOADING, loading: payload })
export const setProduct = (payload) => ({
	type: SET_PRODUCT,
	product: payload,
})
export const setRecommendedProducts = (payload) => ({
	type: SET_RECOMMENDED_PRODUCTS,
	recommendedProducts: payload,
})

export const setPagination = (payload) => ({
	type: SET_PAGINATION,
	pagination: payload,
})

export const setAllProducts = (payload) => ({
	type: SET_ALL_PRODUCTS,
	products: payload,
})

export const getCategoryProducts = (slug, page = 1) => {
	return async (dispatch) => {
		dispatch(setLoading(true))
		axios
			.get(
				`https://ecommerce-lesson.herokuapp.com/dev/client/category/${slug}?page=${page}`
			)
			.then((response) => {
				if (response.data.products) {
					dispatch(setCategoryProducts(response.data.products))
					dispatch(setPagination(response.data.pagination))
					dispatch(setLoading(false))
				}
			})
			.catch((error) => {
				alert("error")
				dispatch(setLoading(false))
			})
	}
}

export const getProduct = (slug) => {
	return async (dispatch) => {
		dispatch(setLoading(true))
		axios
			.get(
				`https://ecommerce-lesson.herokuapp.com/dev/client/product/${slug}`
			)
			.then((response) => {
				if (response.data.product) {
					dispatch(setProduct(response.data.product))
					dispatch(
						setRecommendedProducts(
							response.data.recommendedProducts
						)
					)
					dispatch(setLoading(false))
				}
			})
			.catch((error) => {
				alert("error")
				dispatch(setLoading(false))
			})
	}
}

export const getAllProducts = () => {
	return async (dispatch) => {
		dispatch(setLoading(true))
		axios
			.get(
				"https://ecommerce-lesson.herokuapp.com/dev/client/product/list?per_page=30"
			)
			.then((response) => {
				if (response.data.products) {
					dispatch(setAllProducts(response?.data?.products))
					dispatch(setLoading(false))
				}
			})
			.catch((error) => {
				alert(error)
			})
	}
}

export default ProductsReducer
