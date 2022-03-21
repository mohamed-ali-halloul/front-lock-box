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
  console.log("---------------------------")
  console.log(state);
  const user = useSelector((state) => state.users);
  const handleSignOut = () => {
    dispatch(signOut());
    history.push("/");
  };
  const handleProfileClick=()=>{
    history.push('/profile');   }
  const menu = (
    <Menu>
      <Menu.Item key="sub1" onClick={handleProfileClick} style={{color: 'black'}} icon={<UserOutlined /> }>Profile</Menu.Item> 
    
       <Menu.Item key="1" onClick={() => handleSignOut()}>
                <Link to="/"  ><LogoutOutlined />  logout</Link>
              </Menu.Item>
       </Menu>       
  );
  return (
    <>
    
    <div className="navbar">
        
        <img src={logo} width={200} className="img" />
           
       
        {/* <Menu theme="light" mode="vertical" style={{display :"flex"}}   >
          
          
            <>
         

              <Menu.Item className="username" > <UserOutlined />
                Logged in as {user.username}
                </Menu.Item>
             <Menu.Item key="2" onClick={() => handleSignOut()}>
                <Link to="/"  ><LogoutOutlined />  logout</Link>
              </Menu.Item>
            </>
 
        </Menu> */}
         <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
    <UserOutlined />
                Logged in as {user.username}<DownOutlined />
    </a>
  </Dropdown>
        </div>
    </>
  );
};

export default NavBar;
