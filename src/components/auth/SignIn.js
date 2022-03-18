import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import { Button, Form, Input } from "antd";

import { login } from "../../store/actions/authActions";

const SignIn = () => {
  const history = useHistory();

  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

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

  if (user.id) return <Redirect to="/" />;

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
          offset: 8,
          span: 16,
        }}
      > <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          type="submit"
        >
          SignIn
        </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignIn;
