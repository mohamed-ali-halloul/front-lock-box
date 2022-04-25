import http from "./index";

const login = (data)=> {
    
return http.post("/connexion",data);}
const SignUp = (data)=> {
    return http.post("/inscription",data)
}

const update=(id, data)=>{
return http.put(`/${id}`,data);
}
const generercode=(id, data)=>{
    console.log(data);
 return http.put(`/code/${id}`,data);
}
const UserService ={
    login,
    SignUp,
    update,
    generercode
    
};

export default UserService;