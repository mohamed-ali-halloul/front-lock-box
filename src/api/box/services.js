import http from './index';

const create =(data)=> {
    return http.post("/",data);}

const getAll=()=> {
    return http.get("/");
}    
const get=id =>{
    return http.get(`/${id}`)
}
const update=(id,data)=> {
    return http.put(`/${id}`, data);
}
const Delete=(id)=> {
    return http.delete(`/${id}`);
}
const deleteAll=()=>{
    return http.delete('/');
}
const BoxService ={
    create,
    get,
    getAll,
    update,
    Delete,
    deleteAll
};
export default BoxService;