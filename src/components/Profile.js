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
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      setUsername(userInfo.username);
      setEmail(userInfo.email);
      
    }
  }, [history, userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(update({ username, email, password }));
  };
  return (
    <div>
      {/* <Typography.Title>Profile</Typography.Title>
   <Typography>Update the currently User</Typography>
   <Form   name="basic"
      labelCol={{ span: 8 }}
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
    */}
    <div title="EDIT PROFILE">
      <div>
{/*     
            <Form onSubmit={submitHandler}>
             
              <Form.Group controlId="name">
                <Form.Label>username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "}
      </Form> */}
        
      </div>
    </div>
    </div>
  );
};
export default Profile;
