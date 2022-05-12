import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Button, Form, Input } from "antd";

import { login } from "../../store/actions/authActions";
import "./SignIn.css";
const SignIn = () => {
  const history = useHistory();

  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const handleSignUp = () => {
    history.push("/signup");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(creds.email, creds.password))
      .then((res) => {
        console.log(res);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
    setCreds({ email: "", password: "" });
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 16,
        }}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <h1>sign In</h1>
        <div className="d3">
          <Form.Item
            label="email"
            name="Email"
            variant="outlined"
            value={creds.email}
            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            variant="outlined"
            value={creds.password}
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 5,
              span: 16,
            }}
          >
        
           <div className="btn-8">
          
            <Button
              variant="contained"
              type="primary" 
              onClick={handleSubmit}
              size="large"
              block
            >
              SignIn
            </Button>
            </div>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default SignIn;
