import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import { Button ,Typography, Input  } from 'antd';


import Acceuil from "../Acceuil";
import { login } from "../../store/actions/authActions";

// const useStyles = makeStyles({
//   formStyle: {
//     margin: "0px auto",
//     padding: "30px",
//     borderRadius: "9px",
//     boxShadow: "0px 0px 12px -3px #000000",
//   },
//   spacing: {
//     marginTop: "20px",
//   },
// });

const SignIn = () => {
const history = useHistory();

  // const classes = useStyles();
  const auth= useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(creds.email, creds.password))
     .then((res)=>{
      console.log(res);
      history.push("/home");
    })
     .catch((err)=>{
      console.log(err);
    })
   setCreds({ email: "", password: "" });
  };

  if (auth._id) return <Redirect to="/" />;

  return (
    <>
    <Acceuil />
      <form
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <h1>sign In</h1>
        <Input
          id="enter-email"
          placeholder="enterEmail"
          variant="outlined"
          
          value={creds.email}
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
        />
        <Input
          
          id="enter-password"
          type="password"
          placeholder="enterPassword"
          variant="outlined"
          
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          type="submit"
        
        >
          SignIn
        </Button>
      </form>
    </>
    
  );
};

export default SignIn;