import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Input, Button, Form } from "antd";
import { CreateCabine } from "../../store/actions/cabineActions";
import { Redirect } from "react-router-dom";

const AddCabine = () => {
  // const navigate = useNavigate();
  const cabines = useSelector((state) => state.cabines);
  const dispatch = useDispatch();
  const [cabine, setCabine] = useState({
    ref: "",
    name: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cabine);
    dispatch(CreateCabine(cabine));
  };
  if (cabine._id) return <Redirect to="/" />;

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h5">Create cabine</Typography>
        <Form.Item label="Reference">
        <Input
          id="enter-ref"
          label="enterRef"
          variant="outlined"
          fullWidth
          value={cabine.ref}
          onChange={(e) => setCabine({ ...cabine, ref: e.target.value })}
        />
        </Form.Item>
        <Form.Item label="name">
        <Input
          id="enter-name"
          label="enterName"
          variant="outlined"
          fullWidth
          value={cabine.name}
          onChange={(e) => setCabine({ ...cabine, name: e.target.value })}
        />
  </Form.Item>
        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
          Create
        </Button>
      </form>
    </>
  );
};
export default AddCabine;
