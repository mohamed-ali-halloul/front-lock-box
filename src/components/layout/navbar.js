import React from "react";

import {  Menu, Dropdown  } from "antd";
import logo from "./Locbox.png"
import { Link, useHistory } from "react-router-dom";
import { UserOutlined, LogoutOutlined,DownOutlined  } from '@ant-design/icons';
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
    history.push("/");
  };
  

  return (
    <>
    <div className="navbar">
        
        <img src={logo} width={200} className="img" />
           
       
        <Menu theme="light" mode="vertical" style={{display :"flex"}}   >
          
          
            <>
         

              <Menu.Item className="username" > <UserOutlined />
                Logged in as {user.username}
                </Menu.Item>
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
