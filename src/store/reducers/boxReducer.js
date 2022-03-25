import { toast } from "react-toastify";

const initialState=[];

const boxReducer = (state=initialState, action) => {
   const {type,payload,key}=action;
    switch(type){
        case "CREATE_BOX" :
            toast.success("create successfully...", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
            return [...state, payload];
        case "READ_BOX" :
            return payload;
                
              
        case "UPDATE_BOX" :
            toast.success("box updated...",{
                position : toast.POSITION.BOTTOM_RIGHT,
              });
              return state.map((boxe) =>{
             if( boxe.id === key )
             {return {...boxe,
                        ...payload};
             }else{ return boxe;}

    });
        case "DELETE_BOX":
            toast.success("Box Deleted...",{
                position : toast.POSITION.BOTTOM_RIGHT,
              }) ;
              
              
            // return { ...state, box:Object.values(state.box).filter(({id}) => id !== payload.id)};     
            return state.filter(({id})=> id !== payload.id);
        case "DELETE_ALL":
            return [];
               
        default:
           return state;
    }
};
export default boxReducer;