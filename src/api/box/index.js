import axios from "axios";

export default axios.create({
    // baseURL : `${process.env.REACT_APP_BASE_URL}/api/boxes`,
    baseURL:"http://localhost:3001/api/boxes",
    // headers : {
    //         "x-auth-token": localStorage.getItem("token"),
    //     },
    headers:{"Content-type": "application/json"}

});