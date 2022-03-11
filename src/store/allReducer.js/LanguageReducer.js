const CHANGE_LANG = 'CHANGE_LANG' 

const initial_state = {
  lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'uz'
}

const LanguageReducer = (state = initial_state, action) =>{
  switch(action.type){
    case CHANGE_LANG:
      state.lang = action.lang
      return state

    default:
       return state
  }
}

export const changeLangAC = (lang) => ({type: CHANGE_LANG, lang: lang})

export default LanguageReducer