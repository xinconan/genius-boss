import axios from 'axios'

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const initState = {
  isAuth: '',
  redirectTo: '',
  msg: '',
  user: '',
  type: ''
}

// reducer
export function user(state=initState, action) {
  switch(action.type) {
    case REGISTER_SUCCESS:
      return {...state, msg:'', isAuth: true, ...action.payload}
    case AUTH_SUCCESS:
      return {...state, msg:'', isAuth: true, ...action.payload}
    case LOAD_DATA:
      return {...state, ...action.payload}
    case ERROR_MSG:
      return {...state, isAuth:false, msg: action.msg}
    default: 
      return state
  }
}

function registerSuccess(data) {
  return {type: REGISTER_SUCCESS, payload: data}
}


function errorMsg(msg) {
  return { msg, type: ERROR_MSG}
}

export function register({user, pwd, repeatPwd, type}) {
  if (!user || !pwd || !type) {
    return errorMsg('用户名密码必须输入')
  }
  if (pwd !== repeatPwd) {
    return errorMsg('两次密码输入不一致')
  }
  return dispatch => {
    axios.post('/user/register', {user,pwd, type})
      .then((res) => {
        if (res.status ===200 && res.data.code === 0) {
          dispatch(registerSuccess({user,pwd, type}))
        }else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}
