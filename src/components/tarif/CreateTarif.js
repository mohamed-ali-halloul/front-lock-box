import { Input  , Form, Typography, InputNumber ,DatePicker,Select,Button} from "antd";
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {CreateTarif} from "../../store/actions/tarifActions";
function onChange(date, dateString) {
    console.log(date, dateString);
  }
const AddTarif=()=>{
    
    const dispatch = useDispatch();
    const [tarif,setTarif]=useState({
        duration :"",
        price:"",
        date_debut:"",
        display:"",
        idsize:""
     });
const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(CreateTarif(tarif));
};
function onChangesize(value) {
    setTarif({ ...tarif, idsize: value });
  }
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
                  <Typography variant="h5">Create Tarif</Typography>
                  <Form.Item label ="duration">
                      <Input
                      id="enter-duration"
                      variant="outlined"
                      value={tarif.duration}
                      onChange={(e)=> setTarif({...tarif, duration: e.target.value})}
                      />
                  </Form.Item>
                  <Form.Item label="price" >
                  <InputNumber 
                  id="enter_price"
                  variant="outlined"
                  value={tarif.price}
                  onChange={(e)=>setTarif({...tarif, duration: e.target.value})}
                 /> 
                
                </Form.Item>
                <DatePicker onChange={onChange} />
                <Form.Item label="display" >
                  <InputNumber 
                  id="enter_display"
                  variant="outlined"
                  value={tarif.display}
                  onChange={(e)=>setTarif({...tarif, duration: e.target.value})}
                 /> 
                 <Form.Item label="size Id">
          <Select
            placeholder="size id"
            id="enter-idsize"
            label="enterIdSize"
            variant="outlined"
            onChange={onChangesize}
          >
            {/* {cabines?.length &&
              cabines?.map((cabine) => {
                return <option value={cabine?.id}>{cabine?.ref}</option>;
              })} */}
          </Select>
        </Form.Item>
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