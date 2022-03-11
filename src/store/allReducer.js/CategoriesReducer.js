import axios from "axios"
const SET_CATEGORIES ='SET_CATEGORIES';

const initial_state = {
    categories : [],
    loading : false,
}

const CategoriesReducer = (state = initial_state,action) => {
    switch (action.type) {
        case SET_CATEGORIES:
           state.categories = action.categories
               return state
       
        default:
            return state
    }

}

export const setCategories = (payload) => ({
    type : SET_CATEGORIES,
    categories : payload, 
})

export const getCategories = () => {
    return async (dispatch) => {
        await axios
        .get(
            "https://ecommerce-lesson.herokuapp.com/dev/client/category/list"
        )
        .then((response) => {
            if(response.data.categories){
                dispatch(setCategories(response.data.categories))
            }
            else{
                alert("Ma'lumot qabul qilishda xatolik!")
            }
        })
        .catch((error) => {
            alert("error")
        })
    }
}

export default CategoriesReducer

