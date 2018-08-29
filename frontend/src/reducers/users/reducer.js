export default (state = {}, action) => {
  switch(action.type){
    case "REGISTER":
      return {
        user: action.payload
      }
    case "LOGIN":
      return {
        success: action.payload
      }
    case "LOGOUT":
      return {
        success: action.payload
      }
    default: return state
  }
}
