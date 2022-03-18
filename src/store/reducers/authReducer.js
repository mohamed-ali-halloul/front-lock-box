import { toast } from "react-toastify";

const initialState = {  
id:null,
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
         id:action.payload.id,
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
      case "UPDATE_USER":
          return state.map((user) => {
            if (user.id === action.payload.id) {
              return {
                ...user,
                ...action.payload,
              };
            } else {
              return user;
            }
          });

      
      default:
        return state;
    }
  };
  
  export default authReducer;
