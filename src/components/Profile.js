import react from "react";
import { Typography, Button, Form , Input} from "antd";

const Profile = () => {
  return (
    <div>
      <Typography.Title>Profile</Typography.Title>
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
   
   
      

    </div>
  );
};
export default Profile;
