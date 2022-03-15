import { toast } from "react-toastify";

const initialState = {  

email: null,
username: null,

};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SIGN_IN":
      case "SIGN_UP":  
      case "USER_LOADED":
        toast("Welcome...", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        console.log(action);
        return {
          ...initialState,
         email: action.payload.email,
         username: action.payload.username
         
        };
    
      case "SIGN_OUT":
        localStorage.removeItem("token");
        toast("Goodbye...", { 
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        return {
          username: null,
          email: null,
          
        };
      case "USER_UPDATE_REQUEST":
          return { loading: true };
      case "USER_UPDATE_SUCCESS":
          return { loading: false, userInfo: action.payload, success: true };
      case "USER_UPDATE_FAIL":
          return { loading: false, error: action.payload, success: false };

      
      default:
        return state;
    }
  };
  
  export default authReducer;