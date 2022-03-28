import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Input, Button, Form, Select } from "antd";
import { CreateBox } from "../../store/actions/boxActions";
import CabineService from "../../api/cabine/services";
import "./CreateBox.css";
const AddBox = () => {
  // const navigate = useNavigate();
  const boxe = useSelector((state) => state.boxe);
  const dispatch = useDispatch();
  const [cabines, setCabines] = useState([]);
  const { Option } = Select;
  function onChange(value) {
    console.log(`selected ${value}`);
    setBox({ ...box, size: value });
  }
  function onChangecabine(value) {
    setBox({ ...box, idcabine: value });
  }
  function onSearch(val) {
    console.log("search:", val);
  }
  const [box, setBox] = useState({
    ref: "",
    name: "",
    size: "",
    price: null,
    idcabine: "",
  });
  const getCabines = () => {
    CabineService.getAll()
      .then((res) => {
        setCabines(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getCabines();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(box);
    dispatch(CreateBox(box));
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
        <Typography variant="h5">Create Box</Typography>
        <Form.Item label="Reference">
          <Input
            id="enter-ref"
            variant="outlined"
            value={box.ref}
            onChange={(e) => setBox({ ...box, ref: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="name">
          <Input
            id="enter-name"
            variant="outlined"
            value={box.name}
            onChange={(e) => setBox({ ...box, name: e.target.value })}
          />
        </Form.Item>

        
        <Form.Item label="Cabine Id">
          <Select
            placeholder="cabine id"
            id="enter-idcabine"
            label="enterIdcabine"
            variant="outlined"
            onChange={onChangecabine}
          >
            {cabines?.length &&
              cabines?.map((cabine) => {
                return <option value={cabine?.id}>{cabine?.ref}</option>;
              })}
          </Select>
        </Form.Item>
        <div className="btn1">
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Create
          </Button>
        </div>
      </Form>
    </>
  );
};
export default AddBox;
