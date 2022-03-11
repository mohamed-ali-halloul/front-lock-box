import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import { Typography,Form, Input, Button } from "antd";

import { signUp } from "../../store/actions/authActions";

import './SignUp.css';
import Acceuil from "../Acceuil";

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
    <Acceuil />
      <Form
       name="basic"
       labelCol={{
         span: 1,
       }}
       wrapperCol={{
         span: 6,
       }}
        noValidate
        autoComplete="off"
      >
        <h1> Sign Up </h1>
        <Form.Item
      
          label="username"
          name="enterUsername"
          variant="outlined"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}>
          
          <Input />
          </Form.Item>
        <Form.Item
         
          label="email"
          name="Email"
          variant="outlined"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}>
            <Input />
            </Form.Item>
        <Form.Item
          label="password"
          name="password"
          variant="outlined"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}>
 <Input.Password />
 </Form.Item>
 
 <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          SignUp
        </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignUp;