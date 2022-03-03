import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./components/Home";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/layout/navbar";
import AddBox from "./components/box/CreateBox";
import { loadUser } from "./store/actions/authActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import AddCabine from "./components/cabine/CreateCabine";
import { loadBox } from "./store/actions/boxActions";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  useEffect(() => {
    dispatch(loadBox());
  }, [dispatch]);
  return (
    <Router>
      <Layout>
        <Header className="header">
          <NavBar />
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Switch>
                <Route path="/connexion" component={SignIn } />
                <Route path="/signup" component={SignUp} />
                <Route
                  path="/home"
                  children={<PrivateRoute>
                     <Home/>
                     </PrivateRoute>
                  }
                />

                <Route
                  path="/createbox"
                  component={
                    <PrivateRoute>
                      <AddBox />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/createcabine"
                  component={
                    <PrivateRoute>
                      <AddCabine />
                    </PrivateRoute>
                  }
                />
              </Switch>
            </Menu>
          </Sider>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
