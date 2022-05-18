import {toast} from "react-toastify";
import TarifService from "../../api/tarif/services";
export const CreateTarif =(duration,price,display,idsize)=> async (dispatch)=>{
    return TarifService.create(duration,price,display,idsize)
    .then((res) => {
        dispatch({
          type: "CREATE_TARIF",
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
export const ReadTarif=()=> async (dispatch)=>{
    try{
        const res= await TarifService.getAll()
        dispatch({
            type: "READ_TARIF",
            payload : res.data,
        });
    }catch(error){
        console.log(error);
    }
};
export const deleteTarif=(id)=>async (dispatch)=>{
    try {
        await TarifService.Delete(id);
        dispatch ({
            type: "DELETE_TARIF",
            payload: {id},
        });

    }catch(error){
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
    }
};
export const deleteAllTarif=()=>async (dispatch)=>{
    try{
        const res= await TarifService.deleteAll();
        dispatch({
        type: "DELETE_ALL",
        payload: res.data,
        });
        return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
    }
};
export const updateTarif = (data, keyid) => async (dispatch) => {
    try {
      console.log("action", data);
      const res = await TarifService.update(keyid, data);
  
      dispatch({
        type: "UPDATE_TARIF",
        payload: data,
        key: keyid,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  