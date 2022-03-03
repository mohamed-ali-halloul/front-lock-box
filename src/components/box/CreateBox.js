import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Input,
  Button,
  Form,
  InputNumber,
  Select,
} from "antd";
import { CreateBox } from "../../store/actions/boxActions";
import { Redirect } from "react-router-dom";
import CabineService from "../../api/cabine/services";

const AddBox = () => {
  // const navigate = useNavigate();
  const boxe = useSelector((state) => state.boxe);
  const dispatch = useDispatch();
  const [cabines,setCabines]=useState(
  [])
 
  const [box, setBox] = useState({
    ref: "",
    name: "",
    size: "",
    price: null,
    idcabine: "",
  });
const getCabines=()=> {
 CabineService.getAll()
 .then(res=>{setCabines(res.data);
  console.log(res.data);
})
.catch(e=>{console.log(e);});
};


  useEffect(()=>{getCabines();},[]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(box);
    dispatch(CreateBox(box));
  };
  if (boxe.ref) return <Redirect to="/" />;

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">Create Box</Typography>
        <Input
          id="enter-ref"
          label="enterRef"
          variant="outlined"
          fullWidth
          value={box.ref}
          onChange={(e) => setBox({ ...box, ref: e.target.value })}
        />
        <Input
          id="enter-name"
          label="enterName"
          variant="outlined"
          fullWidth
          value={box.name}
          onChange={(e) => setBox({ ...box, name: e.target.value })}
        />
        <Form fullWidth>
          
          <Select
          placeholder="Size"
            id="enter-size"
            label="enterSize"
            variant="outlined"
            value={box.size}
            onChange={(e) => setBox({ ...box, size: e.target.value })}
          >
            <option value="Small">Small</option>
            <option value="Meduim">Meduim</option>
            <option value="Big">Big</option>
          </Select>
        </Form>
        <InputNumber
          id="enter-price"
          label="enterPrice"
          type="number"
          variant="outlined"
          fullWidth
          value={box.price}
          onChange={(e) => setBox({ ...box, price: e.target.value })}
        />
        <Form fullWidth>
      
          <Select
            placeholder="cabine id"
            id="enter-idcabine"
            label="enterIdcabine"
            variant="outlined"
            fullWidth
            value={box.idcabine}
            onChange={(e) => setBox({ ...box, idcabine: e.target.value })}
          >
            {cabines?.length && cabines?.map((cabine) => {
              return <option value={cabine?.id}>{cabine?.id}</option>;
            })}
          </Select>
        </Form>
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Create
        </Button>
      </form>
    </>
  );
};
export default AddBox;
