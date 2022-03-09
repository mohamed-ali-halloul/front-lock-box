import react from "react";
import { Typography, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import './Acceuil.css';
const Acceuil = () => {

    const history = useHistory();
    const handleSignUp=()=>{
        history.push("/signup")
    }
    const handleSignin=()=>{
        history.push("/connexion");
    }
  return (
    <div className="acc">
      <h1>Acceuil</h1>
      <p>Welcome to Lock Box </p>
     
      <Button onClick={handleSignin}> SIGN IN</Button>
     <Button onClick={handleSignUp}> SIGN UP</Button> 
    </div>
  );
};
export default Acceuil;
