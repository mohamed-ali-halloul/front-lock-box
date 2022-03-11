import React from "react";

import { Typography, Menu, Image } from "antd";
import logo from "./Locbox.png"
import { Link, useHistory } from "react-router-dom";
import { UserOutlined, LogoutOutlined  } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import './Navbar.css'
import { signOut } from "../../store/actions/authActions";
const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const user = useSelector((state) => state.auth);
  const handleSignOut = () => {
    dispatch(signOut());
    history.push("/connexion");
  };
  

  return (
    <>
    <div className="navbar">
        
        <img src={logo} width={200} className="img" />
           
       
        <Menu theme="light" mode="vertical" style={{display :"flex"}} >
          
          
            <>
         

              <h5 className="username"> <UserOutlined />
                Logged in as {user.username}
                </h5>
             <Menu.Item key="2" onClick={() => handleSignOut()}>
                <Link to="/"  ><LogoutOutlined />  logout</Link>
              </Menu.Item>
            </>
 
        </Menu>
        </div>
    </>
  );
};

export default NavBar;
