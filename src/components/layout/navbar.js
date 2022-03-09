import React from "react";

import { Typography, Menu } from "antd";

import { Link, useHistory } from "react-router-dom";

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
  const handlehomeClick=()=>{
    history.push("/home");
  }

  return (
    <>
    <div className="navbar">
        
        <h1 className="title">lock Box</h1>
           
       
        <Menu theme="light" mode="vertical" style={{display :"flex"}} >
          
          {localStorage.getItem("token") ? (
            <>
            <Menu.Item key="1" onClick={handlehomeClick} style={{textAlign:"left"}}>
              
                <Link to="/home">home</Link>
             
                </Menu.Item>

              <h2 className="username">
                Logged in as {user.username}
                </h2>
             <Menu.Item key="2" onClick={() => handleSignOut()}>
                <Link to="/">SignOut</Link>
              </Menu.Item>
            </>
          ) : (
            <>
              
              <Menu.Item key="1">
                <Link to="/connexion">SignIn</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/signup">SignUp</Link>
              </Menu.Item>
            </>
          )}
        </Menu>
        </div>
    </>
  );
};

export default NavBar;
