import { toast } from "react-toastify";

const initialState={boxes:[]};

const boxReducer = (boxes=initialState, action) => {
   const {type,payload}=action;
    switch(type){
        case "CREATE_BOX" :
            toast.success("create successfully...", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
            return [...boxes, payload];
        case "READ_BOX" :
            return {...initialState,
            boxes:payload};
                
              
        case "UPDATE_BOX" :
            toast.success("box updated...",{
                position : toast.POSITION.BOTTOM_RIGHT,
              });
              return boxes.map((box) =>{
             if( box.id === payload.id )
             {return {...box,
                        ...payload};
             }else{ return box;}

    });
        case "DELETE_BOX":
            toast.success("Box Deleted...",{
                position : toast.POSITION.BOTTOM_RIGHT,
              }) ;
            return boxes.filter(({id}) => id !== payload.id);     
        case "DELETE_ALL":
            return [];
               
        default:
           return boxes;
    }
};
export default boxReducer;