import { toast } from "react-toastify";

const initialState={box:[]};

const boxReducer = (state=initialState, action) => {
   const {type,payload}=action;
    switch(type){
        case "CREATE_BOX" :
            toast.success("create successfully...", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
            return {...state, box:[...state.box,payload]};
        case "READ_BOX" :
            return {...state,
            box:payload};
                
              
        case "UPDATE_BOX" :
            toast.success("box updated...",{
                position : toast.POSITION.BOTTOM_RIGHT,
              });
              return state.map((box) =>{
             if( box.id === payload.id )
             {return {...box,
                        ...payload};
             }else{ return box;}

    });
        case "DELETE_BOX":
            toast.success("Box Deleted...",{
                position : toast.POSITION.BOTTOM_RIGHT,
              }) ;
              
              
            return { ...state, box:Object.values(state.box).filter(({id}) => id !== payload.id)};     
        case "DELETE_ALL":
            return [];
               
        default:
           return state;
    }
};
export default boxReducer;