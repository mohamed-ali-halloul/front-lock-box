import http from './index';
const create = (data)=> {
    return http.post("/",data);}
const getAll =(data)=> {
    return http.get("/",data);
}
const update= (id,data)=> {
    return http.put("/:id",id,data);
}
const Delete=(id)=> {
    return http.delete("/:id",id);
}
const CabineService ={
create,
getAll
};
export default CabineService;