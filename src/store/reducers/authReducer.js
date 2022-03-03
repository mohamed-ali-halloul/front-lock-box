import { toast } from "react-toastify";

const initialState = {  

email: null,
username: null,

};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SIGN_IN":
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
      default:
        return state;
    }
  };
  
  export default authReducer;