import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Input, Button, Form, Select,InputNumber } from "antd";
import { CreateBox } from "../../store/actions/boxActions";
import CabineService from "../../api/cabine/services";
import SizeService from "../../api/size/services";
import "./CreateBox.css";
const AddBox = () => {
  // const navigate = useNavigate();
  const boxe = useSelector((state) => state.boxe);
  const dispatch = useDispatch();
  const [cabines, setCabines] = useState([]);
  const [sizes,setSizes]=useState([]);

 
  function onChangecabine(value) {
    setBox({ ...box, idcabine: value });
  }
  function onChangesize(value) {
    setBox({ ...box, idsize: value });
  }
 
  const [box, setBox] = useState({
    ref: "",
    name: "",
    status:"",
    code:"",
    availibility:"",
    boardID :"",
    doorNumber:"",
    idcabine: "",
    idsize:""
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
  const getSizes=()=>{
    SizeService.getAll()
    .then((res)=>{
      setSizes(res.data);
      console.log(res.data);
    })
    .catch((e)=>{
      console.log(e);
    });
  };
  useEffect(() => {
    getCabines();
  }, []);
  useEffect(() => {
    getSizes();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    box.ref=box.boardID+box.doorNumber;
    console.log("ref",box);
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
        <Form.Item label="boardId">
          <Input
            id="enter-boardId"
            variant="outlined"
            value={box.boardID}
            onChange={(e) => setBox({ ...box, boardID: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="doorNumber">
          <Input
            id="enter-doorNumber"
            variant="outlined"
            value={box.doorNumber}
            onChange={(e) => setBox({ ...box, doorNumber: e.target.value })}
          />
        </Form.Item>
        {/* <Form.Item label="Reference">
          <Input
            id="enter-ref"
            variant="outlined"
            value={box.boardId +box.doorNumber }
            disabled="true"
            onChange={(e) => setBox({ ...box, ref: box.boardId +box.doorNumber })}
          />

        </Form.Item> */}
        
        <Form.Item label="name">
          <Input
            id="enter-name"
            variant="outlined"
            value={box.name}
            onChange={(e) => setBox({ ...box, name: e.target.value })}
          />
        </Form.Item>

        <Form.Item label="status">
          <Input
            id="enter-status"
            variant="outlined"
            value={box.status}
            onChange={(e) => setBox({ ...box, status: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="code">
          <Input
            id="enter-code"
            variant="outlined"
            value={box.code}
            onChange={(e) => setBox({ ...box, code: e.target.value })}
          />
        </Form.Item>
       
        <Form.Item label="availibility" >
        <InputNumber
                  // type="number" 
                  min={0}
                  max={1}
                  id="enter_availibility"
                  variant="outlined"
                  value={box.availibility}
                  onChange={(e)=>setBox({...box, availibility: e})}
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
        <Form.Item label="size Id">
          <Select
            placeholder="size id"
            id="enter-idsize"
            label="enterIdsize"
            variant="outlined"
            onChange={onChangesize}
          >
            {sizes?.length &&
              sizes?.map((size) => {
                return <option value={size?.id}>{size?.value}</option>;
              })}
          </Select>
        </Form.Item>
        <div className="btn1">
          <Button  htmlType="submit" onClick={handleSubmit}>
            Create
          </Button>
        </div>
      </Form>
    </>
  );
};
export default AddBox;
