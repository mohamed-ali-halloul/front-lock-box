import axios from "axios";

export default axios.create({
    baseURL : "http://localhost:3001/api/tarifs",
    // headers : {
    //         "x-auth-token": localStorage.getItem("token"),
    //     },
    headers:{"Content-type": "application/json"}

});