import axios from "axios";

export default axios.create({
    baseURL :`${process.env.REACT_APP_BASE_URL}/api/users`,
    headers : {
            "x-auth-token": localStorage.getItem("token"),
        },
    
});