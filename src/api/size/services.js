import http from './index';
const getAll=()=> {
    return http.get("/");
}    
const get=id =>{
    return http.get(`/${id}`)
}
const SizeService ={
    get,
    getAll
};
export default SizeService;