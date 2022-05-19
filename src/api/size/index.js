import axios from "axios";
export default axios.create({
    baseURL :`${process.env.REACT_APP_BASE_URL}/api/sizes`,
    headers:{"Content-type": "application/json"}
})