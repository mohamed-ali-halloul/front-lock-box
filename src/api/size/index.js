import axios from "axios";
export default axios.create({
    baseURL :`${process.env.REACT_APP_BASE_URL}/api/sizes`,
    // baseURL:"http://localhost:3002/api/sizes",
    headers:{"Content-type": "application/json"}
})