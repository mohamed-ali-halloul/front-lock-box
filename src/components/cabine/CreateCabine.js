import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Typography, Input, Button, Form, Select  } from "antd";
import { CreateCabine } from "../../store/actions/cabineActions";
import "./CreateCabine.css";
const AddCabine = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Option } = Select;

  const [cabine, setCabine] = useState({
    ref: "",
    name: "",
    network_type:"",
    mode:"",
   
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cabine);
    dispatch(CreateCabine(cabine));
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography.Title variant="h5">Create cabine</Typography.Title>
        <Form.Item label="Reference">
          <Input
            id="enter-ref"
            label="enterRef"
            variant="outlined"
            value={cabine.ref}
            onChange={(e) => setCabine({ ...cabine, ref: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="name">
          <Input
            id="enter-name"
            label="enterName"
            variant="outlined"
            value={cabine.name}
            onChange={(e) => setCabine({ ...cabine, name: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="network Type">
          <Input
            id="enter-network_type"
            label="enternetwork_type"
            variant="outlined"
            value={cabine.network_type}
            onChange={(e) => setCabine({ ...cabine, network_type: e.target.value })}
          />
        </Form.Item>
        {/* <Form.Item label="mode">
          <Input
            id="enter-mode"
            label="entermode"
            variant="outlined"
            value={cabine.mode}
            onChange={(e) => setCabine({ ...cabine, mode: e.target.value })}
          />
        </Form.Item> */}
       <Form.Item label="mode">
      <Select  
      id="enter-mode"
      label="entermode"
      variant="outlined"
      value={cabine.mode}
      onChange={(e) => setCabine({ ...cabine, mode: e })}
      >
      <Option value="WORKING">WORKING</Option>
      <Option value="OUT_OF_SERVICE">OUT_OF_SERVICE</Option>
      <Option value="CONFIG" >
      CONFIG
      </Option>
     
    </Select></Form.Item>
        <div className="btn3">
          
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            Create
          </Button>
        </div>
      </Form>
    </>
  );
};
export default AddCabine;
