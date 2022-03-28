import { toast } from "react-toastify";
const initialState=[];
const tarifReducer=(state=initialState,action)=>{
    const {type,payload,key}=action;
    switch(type){
        case "CREATE_TARIF":
            toast.success("create successfully...",{
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return[...state,payload ];   
        case "READ_TARIF":
            return payload;
        case "UPDATE_TARIF":
            toast.success("tarif updated ...",{
                position: toast.POSITION.BOTTOM_RIGHT,
            })    ;
            console.log(state.tarif);
            console.log("key",key);
           
            return state.map((tarif)=>{
                if(tarif.id===key)
                {return {...tarif,
                  ...payload};
            }else{return tarif;}
            }
            );
        case "DELETE_TARIF":
            toast.success("tarif Deleted...",{
                position: toast.POSITION.BOTTOM_RIGHT,
            }) ;  
            return state.filter(({id})=> id !== payload.id);
        case "DELETE_ALL":
            return [];
            default: 
            return state;    
    }
};
export default tarifReducer;