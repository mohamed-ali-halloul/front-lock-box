import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import { Form, Input, Button } from "antd";
import logos from "../layout/Locbox.png";
import illus from "../layout/illus.png";

import { signUp } from "../../store/actions/authActions";

import "./SignUp.css";

const SignUp = () => {
  const history = useHistory();

  const auth = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user.username,user.email,user.password))
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
    setUser({ username: "", email: "", password: "" });
  };


  return (
    <>
      <div className="d">
        <img src={logos} width={300} className="img11" />
      <div className="box"> 
       
        <div className="cont">
        <h1 className="titre1">Welcome to Lock Box </h1>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 12,
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
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="email"
              name="Email"
              variant="outlined"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="password"
              name="password"
              variant="outlined"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 4,
                span: 12,
              }}
            >
              <Button
                variant="contained"
                type="primary" 
                onClick={handleSubmit}
                block
                
              >
                SignUp
              </Button>
            </Form.Item>
          </div>
        </Form>
        </div>
        <div>
          <img src={illus}  className="img22"/>
        </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
