import axios from "axios";
export default axios.create({
    // baseURL : `${process.env.REACT_APP_BASE_URL}/api/dashboard`,
    baseURL:"http://localhost:3001/api/dashboard",
    headers:{"Content-type": "application/json"}
})