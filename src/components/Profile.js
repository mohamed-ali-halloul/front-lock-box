import react, {useState,useEffect} from "react";
import { Typography, Button, Form , Input} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../store/actions/authActions";
const Profile = ({location, history}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin  = useSelector((state) => state.auth);
  const { userInfo } = userLogin;
  
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(update({ username, email, password }));
  };
  return (
    <div>
      <Typography.Title>Profile</Typography.Title>
   <Typography>Update the currently User</Typography>
   <Form   name="basic"
      labelCol={{ span: 5}}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
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
   
    
    </div>
  );
};
export default Profile;
