import { toast } from "react-toastify";
import UserService from "../../api/user/services";

export const signUp = (username, email, password) => async (dispatch) => {
  

  return UserService.SignUp(username,email,password).then(
    (res)=>{
      dispatch({
        type:"SIGN_UP",
        payload: res.data,

      });
    
    })
    .catch(error=> { console.log(error.response);
      toast.error(error.response?.data, {
              position: toast.POSITION.BOTTOM_RIGHT,
               });})

     
    }
  
  export const login = (email,password) => async (dispatch)=> {
   try{

     const res = await UserService.login({email,password})   
     var json = JSON.stringify(res.data.token); 
     console.log(json);
     console.log(res);
     localStorage.setItem("token", json);
     dispatch({
       type: "SIGN_IN",
       payload: res.data,
     });
     return Promise.resolve(res.data);
      }
      catch(error)  {
        console.log(error.response);
       

        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
       return Promise.reject(error);
      }
  } 
  export const signOut = () =>{
     return (dispatch) => {
    
      
      dispatch({
        type: "SIGN_OUT",
      });
  
  }};
  
  export const loadUser = () => {
    return (dispatch, getState) => {
      const token = getState().auth.token;
      if (token) {
        dispatch({
          type: "USER_LOADED",
          token,
        });
      } else return null;
    };
  };
  