import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import { Typography, Input, Button } from "antd";

import { signUp } from "../../store/actions/authActions";



const SignUp = () => {
  const history = useHistory();

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user))
    .then((res)=>{console.log(res);
      history.push("/connexion");
    })
     .catch((err)=>{
      console.log(err);
    })
      
    
    setUser({ username: "", email: "", password: "" });
  };

  if (auth._id) return <Redirect to="/" />;

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">Sign Up;</Typography>
        <Input
          id="enter-username"
          label="enterUsername"
          variant="outlined"
          fullWidth
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <Input
         
          id="enter-email"
          label="enterEmail"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Input
          id="enter-password"
          type="password"
          label="enterPassword"
          variant="outlined"
          fullWidth
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          SignUp
        </Button>
      </form>
    </>
  );
};

export default SignUp;