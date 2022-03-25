import { toast } from "react-toastify";
const initialState=[];
const cabineReducer = (state=initialState, action) => {
    const {type,payload,key}=action;

    switch(type){
        case "CREATE_CABINE":
            toast.success("create successfully...",{
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return[...state,payload ];

        case "READ_CABINE":
            console.log(payload);
            return payload;

        case "UPDATE_CABINE":
            toast.success("cabine updated ...",{
                position: toast.POSITION.BOTTOM_RIGHT,
            })    ;
            console.log(state.cabine);
            console.log("key",key);
           
            return state.map((cabine)=>{
                if(cabine.id===key)
                {return {...cabine,
                  ...payload};
            }else{return cabine;}
            }
            );
        case "DELETE_CABINE":
            toast.success("cabine Deleted...",{
                position: toast.POSITION.BOTTOM_RIGHT,
            }) ;
            // return {...state , cabine:Object.values(state.cabine).filter(({id})=> id !==payload.id)};
            return state.filter(({id})=> id !== payload.id);
        case "DELETE_ALL":
            return[];    
        default:
            return state;    

    }
};
export default cabineReducer;