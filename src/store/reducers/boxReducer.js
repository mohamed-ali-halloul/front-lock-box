import { toast } from "react-toastify";

const initialState={
ref: null,
name:null,
size:null,
price:null,
id_cabine: null,
};

const boxReducer = (state=initialState, action) => {
   
    switch(action.type){
        case "CREATE_BOX" :
            toast.success("create successfully...", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
            return {
                ...initialState,
                ref: action.payload.ref,
                name: action.payload.name,
                size: action.payload.size,
                price: action.payload.price,
                id_cabine: action.payload.id_cabine  ,             
            };
        case "READ_BOX" :
            return action.payload;
                
              
        case "UPDATE_BOX" :
            toast.success("box updated...",{
                position : toast.POSITION.BOTTOM_RIGHT,
              });
              return state.map((box) =>{
             if( box._id === action.payload._id )
             {return {...box,
                        ...action.payload};
             }else{ return box;}

    });
        case "DELETE_BOX":
            toast.success("Box Deleted...",{
                position : toast.POSITION.BOTTOM_RIGHT,
              }) ;
            return state.filter(({id}) => id !== action.payload.id);     
        case "DELETE_ALL":
            return [];
               
        default:
           return state;
    }
};
export default boxReducer;