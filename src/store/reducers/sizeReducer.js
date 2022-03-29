const initialState=[];
const sizeReducer = (state=initialState,action)=>{
    const {type,payload}=action ;
    switch(type){
        case "READ_SIZE":
            return payload;
            default: 
            return state; 
    }
    };
    export default sizeReducer;