import http from "./index";

const login = (data)=> {
    
return http.post("/connexion",data);}
const SignUp = (data)=> {
    return http.post("/inscription",data)
}

const UserService ={
    login,
    SignUp,
    
};

export default UserService;