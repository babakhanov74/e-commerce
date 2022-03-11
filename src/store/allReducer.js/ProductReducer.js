import axios from "axios"
const SET_PRODUCT ='SET_PRODUCT';
const SET_LOADING = 'SET_LOADING'

const initial_state = {
    products : [],
    loading : false,
}

const ProductReducer = (state = initial_state,action) => {
    switch (action.type) {
        case SET_PRODUCT:
           state.products = action.products
               return state
        case SET_LOADING:
            state.loading = action.loading
            return state
       
        default:
            return state
    }

}

export const setProducts = (payload) => ({
    type : SET_PRODUCT,
    products : payload, 
})
export const setLoading = (payload) => ({
    type : SET_LOADING,
    loading : payload, 
})


export const getProducts = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios
        .get(
            "https://ecommerce-lesson.herokuapp.com/dev/client/product/list"
        )
        .then((response) => {
            if(response?.data?.products){
                console.log(response.data.products)
                dispatch(setProducts(response.data.products))
                dispatch(setLoading(false))
            }
            else{
                dispatch(setLoading(false))
                alert("Ma'lumot qabul qilishda xatolik!")
            }
        })
        .catch((error) => {
            alert("error")
        })
    }
}

export default ProductReducer

