import react, { useState, useEffect } from "react";
import { Typography, Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, genererCode } from "../../store/actions/authActions";
import "./Profile.css"
const Profile = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
 const [code,setCode]=useState("")
  ;
  const userState = useSelector((state) => state.users);
  console.log(userState);

  const update = () => {
    console.log(userState);
    dispatch(updateUser(userState.id, userState))
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const generer=()=>{
    console.log(code);
    dispatch(genererCode(userState.id,{code}))
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
  }
  return (
    <div>
      <Typography.Title>Profile</Typography.Title>
      <Typography>Update the currently User</Typography>
      <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        initialValues={{
          Updatetheusername: userState.username,
          UpdateEmail: userState.email,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Update the Username"
          name="Updatetheusername"
          onChange={(e) => {
            userState.username = e.target.value;
          }}
          rules={[{ message: "Please input the new username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Update Email"
          name="UpdateEmail"
          rules={[{ message: "Please input the new email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="New Password"
          name="newpassword"
          rules={[{ message: "Please input the new password!" }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
      <Form.Item
      wrapperCol={{
                    offset: 7,
                    span: 11,
                  }}
                >
        <Button   type="primary" onClick={() => update()} className="btn-upd">
          Update
        </Button>
        </Form.Item> 
    
      <div>
       <h2>Generer Code</h2>
       <Form.Item
       labelCol={{ span: 5 }}
       wrapperCol={{ span: 8}}
          label="Code"
          name="Code"
          rules={[{ message: "Please input the Code!" }]}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
                  wrapperCol={{
                    offset: 7,
                    span: 8,
                  }}
                >
        
          
        <Button type="primary"onClick={() =>generer()}>
          Enregistrer le code
        </Button>
     
      </Form.Item>
      </div>
    </div>
  );
};
export default Profile;
