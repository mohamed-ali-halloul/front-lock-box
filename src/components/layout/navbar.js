import React from "react";

import { Layout,Typography, Button } from "antd";

import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

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
     
        <Layout position="static" color="primary">
          
            <Typography variant="h4" >
              <Link  to="/">
                LockBox
              </Link>
            </Typography>
            {localStorage.getItem("token") ? (
              <>
              <Button
                  edge="end"
                  color="inherit"
                  
                >
                  <Link  to="/home">
                    home
                  </Link>
                </Button>
                <Typography variant="subtitle2" >
                  Logged in as {user.username}
                </Typography>
                <Button
                  edge="end"
                  color="inherit"
                  onClick={() => handleSignOut()}
                >
                  <Link  to="/">
                    SignOut
                  </Link>
                </Button>
              </>
            ) : (
              <>
              <Button
                  edge="end"
                  color="inherit"
                >
                  <Link  to="/home">
                    home
                  </Link>
                </Button>
                <Button
                  edge="end"
                  color="inherit"
                  
                >
                  <Link to="/connexion">
                    SignIn
                  </Link>
                </Button>
                <Button
                  edge="end"
                  color="inherit"
                 
                >
                  <Link  to="/signup">
                    SignUp
                  </Link>
                </Button>
              </>
            )}
          </Layout>
      
    </>
  );
};

export default NavBar;