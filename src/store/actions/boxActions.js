import { toast } from "react-toastify";
import BoxService from "../../api/box/services";

export const CreateBox =
  (ref, name, id_cabine,status,idsize,code,availibility,boardId,doorNumber) => async (dispatch) => {
    return BoxService.create(ref, name, status, id_cabine,idsize,code,availibility,boardId,doorNumber)
      .then((res) => {
        dispatch({
          type: "CREATE_BOX",
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

export const ReadBox = () => async (dispatch) => {
  try {
    const res = await BoxService.getAll();
    console.log("payload :" + res);
    dispatch({
      type: "READ_BOX",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const UpdateBox = (data, keyid) => async (dispatch) => {
  try {
    const res = await BoxService.update(keyid, data);

    dispatch({
      type: "UPDATE_BOX",
      payload: data,
      key: keyid,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return Promise.reject(error);
  }
};
export const DeleteBox = (id) => async (dispatch) => {
  try {
    await BoxService.Delete(id);
    dispatch({
      type: "DELETE_BOX",
      payload: { id },
    });
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export const deleteAllBox = () => async (dispatch) => {
  try {
    const res = await BoxService.deleteAll();
    dispatch({
      type: "DELETE_ALL",
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const loadBox = () => {
  return (dispatch, getState) => {
    const ref = getState().boxe.ref;
    if (ref) {
      dispatch({
        type: "LOAD_BOX",
        ref,
      });
    } else return null;
  };
};
