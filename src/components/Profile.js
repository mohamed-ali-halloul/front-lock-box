import react, {useState,useEffect} from "react";
import { Typography, Button, Form , Input} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/actions/authActions";
const Profile = () => {

  const dispatch = useDispatch();
  const user  = useSelector((state) => state.users);
 

  const update=(user)=>{
dispatch(updateUser(user))
.then(response => {
  console.log(response);
})
.catch(e => {
  console.log(e);
}); }
  return (
    <div>
      <Typography.Title>Profile</Typography.Title>
   <Typography>Update the currently User</Typography>
   <Form   name="basic"
      labelCol={{ span: 5}}
      wrapperCol={{ span: 16 }}
      initialValues={{Updatetheusername: user.username,UpdateEmail: user.email   }}
      autoComplete="off">
<Form.Item
        label="Update the Username"
        name="Updatetheusername"
        rules={[{ message: 'Please input the new username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
      label="Update Email"
      name="UpdateEmail"
      rules={[{ message: 'Please input the new email!' }]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="New Password"
        name="newpassword"
        rules={[{  message: 'Please input the new password!' }]}
      >
        <Input.Password />
      </Form.Item>



      </Form>
      <div>
   <Button primary onClick={()=>update()}> Update</Button>
   </div>
    </div>
  );
};
export default Profile;
