import { toast } from "react-toastify";
import CabineService from "../../api/cabine/services";
export const CreateCabine = (ref, name,network_type,mode,shortLink) => async (dispatch) => {
  return CabineService.create(ref, name,network_type,mode,shortLink)
    .then((res) => {
      dispatch({
        type: "CREATE_CABINE",
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error.response);
      toast.error(error.response.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
};
export const ReadCabine = () => async (dispatch) => {
  try {
    const res = await CabineService.getAll();
    console.log("payload :" + res.data);
    dispatch({
      type: "READ_CABINE",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteCabine = (id) => async (dispatch) => {
  try {
    await CabineService.Delete(id);
    dispatch({
      type: "DELETE_CABINE",
      payload: { id },
    });
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};
export const deleteAllCabine = () => async (dispatch) => {
  try {
    const res = await CabineService.deleteAll();
    dispatch({
      type: "DELETE_ALL",
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const updateCabine = (data, keyid) => async (dispatch) => {
  try {
    console.log("action", data);
    const res = await CabineService.update(keyid, data);

    dispatch({
      type: "UPDATE_CABINE",
      payload: data,
      key: keyid,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
