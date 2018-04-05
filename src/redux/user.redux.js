const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const initState = {
  redirectTo: '',
  msg: '',
  user: '',
  type: ''
}

// reducer
export function user(state=initState, action) {
  switch(action.type) {
    case AUTH_SUCCESS:
      return {...state, msg:''}
    case LOAD_DATA:
      return {...state, ...action.payload}
    case ERROR_MSG:
      return {...state, isAuth:false, msg: action.msg}
    default: 
      return state
  }
}


