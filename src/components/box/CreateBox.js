import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Input, Button, Form, InputNumber, Select } from "antd";
import { CreateBox } from "../../store/actions/boxActions";
import { Redirect } from "react-router-dom";
import CabineService from "../../api/cabine/services";

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
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h5">Create Box</Typography>
        <Form.Item label="Reference">
          <Input
            id="enter-ref"
            variant="outlined"
            fullWidth
            value={box.ref}
            onChange={(e) => setBox({ ...box, ref: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="name">
          <Input
            id="enter-name"
            variant="outlined"
            fullWidth
            value={box.name}
            onChange={(e) => setBox({ ...box, name: e.target.value })}
          />
        </Form.Item>

        <Form.Item label="size">
          {/* <Select
            id="enter-size"
            variant="outlined"
            onChange={(e) => {console.log(e.target.value); }}
          >
            <Option value="Small">Small</Option>
            <Option value="Meduim">Meduim</Option>
            <Option value="Big">Big</Option>
          </Select> */}
          <Select
            showSearch
            placeholder="Select a size"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Small">Small</Option>
            <Option value="Medium">Medium</Option>
            <Option value="Big">Big</Option>
          </Select>
          ,
        </Form.Item>
        <Form.Item label="Price">
          <input
            type="number"
            value={box.price}
            onChange={(e) => setBox({ ...box, price: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="Cabine Id">
          <Select
            placeholder="cabine id"
            id="enter-idcabine"
            label="enterIdcabine"
            variant="outlined"
            fullWidth
            onChange={onChangecabine}
          >
            {cabines?.length &&
              cabines?.map((cabine) => {
                return <option value={cabine?.id}>{cabine?.ref}</option>;
              })}
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Create
        </Button>
      </Form>
    </>
  );
};
export default AddBox;
