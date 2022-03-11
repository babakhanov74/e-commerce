const ADD_TO_CARD = "ADD_TO_CARD"
const DELETE_TO_CARD = "DELETE_TO_CARD"
const CHANGE_QTY = "CHANGE_QTY"

const initial_state = {
	cart: localStorage.getItem("cart")
		? JSON.parse(localStorage.getItem("cart"))
		: [],
}

const CartReducer = (state = initial_state, action) => {
	switch (action.type) {
		case ADD_TO_CARD:
			let isTrue = state.cart.find((item) =>
				item.id === action.item.id ? true : false
			)
			state.cart = isTrue
				? state.cart.map((item) =>
						item.id === action.item.id
							? { ...item, qty: item.qty + 1 }
							: item
				  )
				: [...state.cart, { ...action.item, qty: 1 }]
			localStorage.setItem("cart", JSON.stringify(state.cart))
			return state

		case DELETE_TO_CARD:
			state.cart = state.cart.filter((item) => item.id != action.id)
			localStorage.setItem("cart", JSON.stringify(state.cart))
			return state

		case CHANGE_QTY:
			state.cart = state.cart.map((item) =>
				item.id === action.id ? { ...item, qty: action.qty } : item
			)
			localStorage.setItem("cart", JSON.stringify(state.cart))
			return state
		default:
			return state
	}
}

export const addToCartAC = (item) => ({ type: ADD_TO_CARD, item: item })
export const deleteToCartAC = (id) => ({ type: DELETE_TO_CARD, id: id })
export const changeQtyAC = (id, qty) => ({ type: CHANGE_QTY, id: id, qty: qty })

export default CartReducer
