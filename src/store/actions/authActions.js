import { toast } from "react-toastify";
import UserService from "../../api/user/services";

export const signUp = (username, email, password) => async (dispatch) => {
  return UserService.SignUp(username, email, password)
    .then((res) => {
      dispatch({
        type: "SIGN_UP",
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error.response);
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
};

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await UserService.login({ email, password });
    var json = JSON.stringify(res.data.token);
    console.log(json);
    console.log(res);
    localStorage.setItem("token", json);
    dispatch({
      type: "SIGN_IN",
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    console.log(error.response);

    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return Promise.reject(error);
  }
};
export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT",
    });
  };
};

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
export const update=(user)=>async (dispatch, getState)=>{
  try {
    dispatch({ type: "USER_UPDATE_REQUEST" });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
   const {data}= await  UserService.update(user,config); 
   dispatch({ type:"USER_UPDATE_SUCCESS" , payload: data });

   dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });

   localStorage.setItem("userInfo", JSON.stringify(data));
 } catch (error) {
   dispatch({
     type: "USER_UPDATE_FAIL",
     payload:
       error.response && error.response.data.message
         ? error.response.data.message
         : error.message,
   });
 }

}
