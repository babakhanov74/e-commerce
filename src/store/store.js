import CartReducer from "./allReducer.js/CartReducer"

const store = {
    _state:{
        card:[]
    },
    getState() {
        return this._state
    },
     reRender() {
     console.log('hello')
    },
    subscribe (observer) {
       return (this.reRender = observer)
    },
    dispatch(action){
        store._state.card = CartReducer(store._state.card, action)
         this.reRender()
    },
   
    }

  export default store