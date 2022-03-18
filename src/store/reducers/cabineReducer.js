import { toast } from "react-toastify";
const initialState={
    cabine:[]
};
const cabineReducer = (state=initialState, action) => {
    const {type,payload}=action;

    switch(type){
        case "CREATE_CABINE":
            toast.success("create successfully...",{
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return{...state,cabine: [...state.cabine,payload] };

        case "READ_CABINE":
            return {...state,
                cabine:payload};

        case "UPDATE_CABINE":
            toast.success("cabine updated ...",{
                position: toast.POSITION.BOTTOM_RIGHT,
            })    ;
            return state.map((cabine)=>{
                if(cabine.id=== payload.id){
                    return {...cabine,
                            ...payload};
                }else{return cabine;}
            });

        case "DELETE_CABINE":
            toast.success("cabine Deleted...",{
                position: toast.POSITION.BOTTOM_RIGHT,
            }) ;
            return {...state , cabine:Object.values(state.cabine).filter(({id})=> id !==payload.id)};
        case "DELETE_ALL":
            return[];    
        default:
            return state;    

    }
};
export default cabineReducer;