import http from './index';
const create = (data)=> {
    return http.post("/",data);}
const getAll =(data)=> {
    return http.get("/",data);
}
const update= (id,data)=> {
    console.log("id"+id+"data"+data);
    return http.put(`/${id}`,data);
}
const Delete=(id)=> {
    return http.delete(`/${id}`);
}
const deleteAll=()=>{
    return http.delete('/');
}
const CabineService ={
create,
getAll,
Delete,
deleteAll,
update
};
export default CabineService;