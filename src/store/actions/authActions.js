import { toast } from "react-toastify";
import UserService from "../../api/user/services";

export const signUp = (username, email, password) => async (dispatch) => {
  try{
    const res=  await UserService.SignUp(username, email, password);
    
      dispatch({
        type: "SIGN_UP",
        payload: res.data,
      });
    return Promise.resolve(res.data);
    }catch(error) {
      console.log(error.response);
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return Promise.reject(error);
    }
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
    const token = getState().users.token;
    if (token) {
      dispatch({
        type: "USER_LOADED",
        token,
      });
    } else return null;
  };
};

export const updateUser = (id, data) => async (dispatch) => {
  try {
    const res = await UserService.update(id, data);

    dispatch({
      type: "UPDATE_USER",
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const genererCode = (id, data) => async (dispatch) => {
  try {
    console.log(data);
    const res = await UserService.generercode(id, data);
    
    dispatch({
      type: "CODE_GENERER",
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};