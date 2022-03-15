import { toast } from "react-toastify";
const initialState={
    cabine:[]
};
const cabineReducer = (cabine=initialState, action) => {
    const {type,payload}=action;

    switch(type){
        case "CREATE_CABINE":
            toast.success("create successfully...",{
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return[...cabine,payload]

        case "READ_CABINE":
            return {...initialState,
                cabine:payload};

        case "UPDATE_CABINE":
            toast.success("cabine updated ...",{
                position: toast.POSITION.BOTTOM_RIGHT,
            })    ;
            return cabine.map((cabine)=>{
                if(cabine._id=== payload._id){
                    return {...cabine,
                            ...payload};
                }else{return cabine;}
            });

        case "DELETE_CABINE":
            toast.success("cabine Deleted...",{
                position: toast.POSITION.BOTTOM_RIGHT,
            }) ;
            return {cabine:Object.values(cabine).filter(({id})=> id !==payload.id)};
        case "DELETE_ALL":
            return[];    
        default:
            return cabine;    

    }
};
export default cabineReducer;