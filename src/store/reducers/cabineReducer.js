import { toast } from "react-toastify";
const initialState={
    ref : null,
    name: null,
};
const cabineReducer = (state=initialState, action) => {
    switch(action.type){
        case "CREATE_CABINE":
            toast.success("create successfully...",{
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return{
                ...initialState,
                ref :action.payload.ref,
                name: action.payload.name,
            };

        /*case "READ_CABINE":
            return payload;

        case "UPDATE_CABINE":
            toast.success("cabine updated ...",{
                position: toast.POSITION.BOTTOM_RIGHT,
            })    ;
            return cabines.map((cabine)=>{
                if(cabine._id=== payload._id){
                    return {...cabine,
                            ...payload};
                }else{return cabine;}
            });

        case "DELETE_CABINE":
            toast.success("cabine Deleted...",{
                position: toast.POSITION.BOTTOM_RIGHT,
            }) ;
            return cabines.filter(({id})=> id !==payload.id);
*/
        default:
            return state;    

    }
};
export default cabineReducer;