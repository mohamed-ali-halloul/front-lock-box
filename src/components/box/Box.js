import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "antd";
import { DeleteBox, UpdateBox } from "../../store/actions/boxActions";

const Box=({box, setBox, boxes})=>{
    const dispatch = useDispatch();
    const auth =useSelector((state)=>state.auth);

const handleDelete =(id)=>{
    dispatch(DeleteBox(id));
};

const handleOnUpdateClick = (id) => {
    const foundbox = boxes.find((box) => box.id === id);
    setBox({ ...foundbox });
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
  };
return(
    <>
    <div></div>
    
    </>
)

};
export default Box;