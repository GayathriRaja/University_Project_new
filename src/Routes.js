import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import AddCamera from "./pages/AddCamera/addcamera";
import AddGate from "./pages/AddGate/addgate";
import AddVehicle from "./pages/AddVehicle/addvehicle";
import CamPage from "./pages/CamPage/campage";
import Home from "./pages/Home/home";
import SecurityPersonal from "./pages/SecurityPersonal/securitypersonal";
import Login from "./pages/LandingPage/Login";
import Register from "./pages/LandingPage/Register";
import ForgotPassword from "./pages/LandingPage/ForgotPassword";
import { SIDEBAR_PATH_LIST } from "./utils";
import { useLocation, useRouteMatch } from "react-router-dom";
function Routes() {
  const location = useLocation();
  const camPageMatch = useRouteMatch("/campage/:id");
  return (
    <>
      {(SIDEBAR_PATH_LIST.includes(location.pathname) || !!camPageMatch) && (
        <>
          <Route component={NavBar} />
          <Route component={SideBar} />
        </>
      )}
      <Switch>
        <Route component={AddCamera} path="/addcamera" exact />
        <Route component={AddGate} path="/addgate" exact />
        <Route component={AddVehicle} path="/addvehicle" exact />
        <Route component={CamPage} path="/campage/:id" exact />
        <Route component={Home} path="/home" exact />
        <Route component={Login} path="/" exact />
        <Route component={Register} path="/register" exact />
        <Route component={ForgotPassword} path="/forgot" exact />

        <Route component={SecurityPersonal} path="/securitypersonal" exact />
      </Switch>
      {(SIDEBAR_PATH_LIST.includes(location.pathname) || !!camPageMatch) && (
        <Route component={Footer} />
      )}
    </>
  );
}

export default Routes;
