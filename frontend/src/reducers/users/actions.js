import * as userActions from './actiontypes'


export const registerUser = (user) => {
  return (dispatch) => {
    userActions.REGISTER_SUCCESS()
  }
}

export const loginUser = () => {
  return (dispatch) => {
    userActions.LOGIN_SUCCESS()
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    userActions.LOGOUT_SUCCESS()
  }
}
