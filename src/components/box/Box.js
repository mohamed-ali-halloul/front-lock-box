import React , {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import {UpdateBox, DeleteBox} from "../../store/actions/boxActions";
import BoxService from "../../api/box/services";
import { useNavigate } from "react-router-dom";
const Box = (props)=>{
    const initialState={
        id: null,
        ref : "",
        name:"",
        size:"",
        price: "",
        idcabine:""};
        const [currentBox,setCurrentBox]= useState(initialState);
        const [message,setMessage]=useState("");
        const navigate = useNavigate();

        const dispatch = useDispatch();
        const getBox = id=>{
            BoxService.get(id)
            .then(response =>{
                setCurrentBox(response.data);
                console.log(response.data);
            })
            .catch(e=>{
                console.log(e);
            });
        };
        useEffect(()=>{
            getBox(props.match.params.id);
        },[props.match.params.id]);

        const handleInputChange=event=>{
            const {name,value}=event.target;
            setCurrentBox({...currentBox, [name]: value});
        };
        const updateStatus = status =>{
            const data= {
                id: currentBox.id,
                ref: currentBox.ref,
                name:status,
                size: status,
                price: status,
                idcabine: status,
            };
            dispatch(UpdateBox(currentBox.id,data))
            .then(response =>{
                console.log(response);
                setCurrentBox({...currentBox, name:status,
                    size: status,
                    price: status,
                    idcabine: status,})
            })
            .catch(e=>{console.log(e);})
        };
        const updateContent = () => {
            dispatch(UpdateBox(currentBox.id, currentBox))
            .then(response=>{console.log(response);
            setMessage("Box was updated successfully! ");
              })
            .catch(e=>{console.log(e);});
        };
        const removeBox=()=>{
            dispatch(DeleteBox(currentBox.id))
            .then(()=>{
                navigate("/boxes");
            })
            .catch(e=>{
                console.log(e);
            });
        }   ;
        return(
           <div></div>
        )


}