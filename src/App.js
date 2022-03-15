import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./components/Home";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AddBox from "./components/box/CreateBox";
import { loadUser } from "./store/actions/authActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import AddCabine from "./components/cabine/CreateCabine";
import { loadBox } from "./store/actions/boxActions";
import LayoutDashboard from "./components/layout/dashboardlayout";
import Box from "./components/box/Box";
import ListBoxes from "./components/box/ReadBoxes";
import ListCabines from "./components/cabine/ReadCabines";
import Profile from "./components/Profile";
import Acceuil from "./components/Acceuil";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  useEffect(() => {
    dispatch(loadBox());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <ToastContainer />

        <Switch>
            <Route path="/" exact component={Acceuil}/>
            {/* <Route path="/connexion" component={SignIn} /> */}
            <Route path="/signup" component={SignUp} />
            
            <LayoutDashboard>
            <PrivateRoute>
              <Route path="/home"exact component={Home} />
              <Route path="/profile"exact component={Profile} />
              <Route path="/createbox"exact component={AddBox} />
              <Route path="/box"exact component={Box} />
              <Route path="/readBox" exact component={ListBoxes} />
              <Route path="/createcabine" exact component={AddCabine} />
              <Route path="/readcabines" exact component={ListCabines} />
              
            </PrivateRoute>
          </LayoutDashboard>
          <Route path="*"component={()=>{return <p>ERREUR 404 </p>} }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
