import axios from "axios";

export default axios.create({
    baseURL : `${process.env.REACT_APP_BASE_URL}/api/tarifs`,
    // headers : {
    //         "x-auth-token": localStorage.getItem("token"),
    //     },
    headers:{"Content-type": "application/json"}

});