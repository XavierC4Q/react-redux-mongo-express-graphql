export const REGISTER_SUCCESS = () => {
  return {
    type: "REGISTER",
    payload: true
  }
}

export const LOGIN_SUCCESS = () => {
  return {
    type: "LOGIN",
    payload: true
  }
}

export const LOGOUT_SUCCESS = () => {
  return {
    type: "LOGOUT",
    payload: true
  }
}

export const REGISTER_ERROR = () => {
  return {
    type: "REGISTER",
    payload: false
  }
}

export const LOGIN_ERROR = () => {
  return {
    type: "LOGIN",
    payload: false
  }
}
