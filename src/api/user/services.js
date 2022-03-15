import http from "./index";

const login = (data)=> {
    
return http.post("/connexion",data);}
const SignUp = (data)=> {
    return http.post("/inscription",data)
}
const update=(id)=>{
return http.put("/",id);
}

const UserService ={
    login,
    SignUp,
    update
    
};

export default UserService;