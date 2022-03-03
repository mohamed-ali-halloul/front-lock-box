import { toast } from "react-toastify";
import CabineService from "../../api/cabine/services";
export const CreateCabine = (ref,name)=> async (dispatch)=> {
    return CabineService.create(ref,name).then(
        (res)=> {
            dispatch({
                type: "CREATE_CABINE",
                payload: res.data,
            });
        })
       .catch(error=> {console.log(error.response);
    toast.error(error.response.data,{
        position: toast.POSITION.BOTTOM_RIGHT,
    });
}) 
}