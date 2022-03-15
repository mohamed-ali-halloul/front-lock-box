import react from "react";
import { Typography, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import './Acceuil.css';
import logo from"./layout/Locbox.png"
const Acceuil = () => {

    const history = useHistory();
    const handleSignUp=()=>{
        history.push("/signup")
    }
    const handleSignin=()=>{
        history.push("/connexion");
    }
  return (
    <>
    <img src={logo} width={300} className="img" />
    <div className="acc">
      <h1>Acceuil</h1>
      <p>Welcome to Lock Box </p>
      
      <Button onClick={handleSignin}> SIGN IN</Button>
     <Button onClick={handleSignUp}> SIGN UP</Button> 
    </div>
    </>
  );
};
export default Acceuil;
