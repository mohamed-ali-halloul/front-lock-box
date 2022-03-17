import verifieAuth from "../middleware/isauth";
import {  Redirect} from "react-router-dom"
export default function PrivateRoute({children, ...rest}){
const auth = verifieAuth();

console.log(auth,children);
    if (auth) { return children ; } else { return  <Redirect to ="/"/>; }

    
}