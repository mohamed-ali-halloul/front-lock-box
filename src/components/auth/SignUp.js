import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import { Form, Input, Button } from "antd";

import { signUp } from "../../store/actions/authActions";

import './SignUp.css';

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
      history.push("/");
    })
    .catch((err)=>{
      console.log(err);
    })
   setUser({ username: "", email: "", password: "" });
  };

  if (auth._id) return <Redirect to="/" />;

  return (
    <>
    <div className="d">
      <Form
       name="basic"
       labelCol={{
         span: 4,
       }}
       wrapperCol={{
         span: 8,
       }}
        noValidate
        autoComplete="off"
      >
        
        <h1 className="t"> Sign Up </h1>
        <div className="d2">
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
          offset: 4,
          span: 8,
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
        </div>
      </Form>
      </div>
    </>
  );
};

export default SignUp;