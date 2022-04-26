import { Input  , Form, Typography, InputNumber ,DatePicker,Select,Button} from "antd";
import React, {useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import {CreateTarif} from "../../store/actions/tarifActions";
import SizeService from "../../api/size/services";
import './CreateTarif.css'
function onChange(date, dateString) {
    console.log(date, dateString);
  }
const AddTarif=()=>{
    
    const dispatch = useDispatch();
    const [sizes,setSizes]=useState([]);

    const [tarif,setTarif]=useState({
        duration :"",
        price:null,
        date_debut:null,
        display:null,
        idsize:""
     });
const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(CreateTarif(tarif));
};
function onChangesize(value) {
    setTarif({ ...tarif, idsize: value });
  }
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
    getSizes();
  }, []);
return (
<>
<Form
        name="basic"
        labelCol={{ span: 3}}
        wrapperCol={{ span: 12 }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
                  <Typography.Title  variant="h5">Create Tarif</Typography.Title>
              
                  <Form.Item label ="duration">
                      <Input
                      id="enter-duration"
                      variant="outlined"
                      value={tarif.duration}
                      onChange={(e)=> setTarif({...tarif, duration: e.target.value})}
                      />
                  </Form.Item>
                  <Form.Item label="price">
                  <InputNumber
                  type="number" 
                  id="enter_price"
                  variant="outlined"
                  value={tarif.price}
                  onChange={(e)=>setTarif({...tarif, price: e})}
                 /> 
                
                </Form.Item>
                <Form.Item label="Date">
                <DatePicker onChange={(e)=>{setTarif({...tarif, date_debut: e})}}  />
                </Form.Item>
                <Form.Item label="display" >
                  <InputNumber
                  type="number" 
                  id="enter_display"
                  variant="outlined"
                  min={0}
                  max={1}
                  value={tarif.display}
                  onChange={(e)=>setTarif({...tarif, display: e})}
                 /> 
                 </Form.Item>
                 <Form.Item label="size Id">
          <Select
            placeholder="size id"
            id="enter-idsize"
            label="enterIdSize"
            variant="outlined"
            onChange={onChangesize}
          >
             {sizes?.length &&
              sizes?.map((size) => {
                return <option value={size?.id}>{size?.value}</option>;
              })}
          </Select>
        </Form.Item>
                
                
                <div className="btn001">
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Create
          </Button>
        </div>
      </Form>
</>
)

};
export default AddTarif;