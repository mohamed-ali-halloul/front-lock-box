import SizeService from "../../api/size/services";
export  const ReadSize =()=> async (dispatch)=>{
    try{
        const res= await SizeService.getAll()
        dispatch({
            type: "READ_SIZE",
            payload : res.data,
        });
    }catch(error){
        console.log(error);
    }
};