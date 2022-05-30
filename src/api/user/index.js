import axios from "axios";

export default axios.create({
    // baseURL :`${process.env.REACT_APP_BASE_URL}/api/users`,
    baseURL:"http://localhost:3001/api/users",

    headers : {
            "x-auth-token": localStorage.getItem("token"),
        },
    
});