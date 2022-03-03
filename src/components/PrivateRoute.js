import verifieAuth from "../middleware/isauth";
import { useHistory} from "react-router-dom"
export default function PrivateRoute({children, ...rest}){
const auth = verifieAuth();
const history= useHistory();
console.log(auth,children);
    if (auth) { return children ; } else { return  history.push("/connexion");}

    
}