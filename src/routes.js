import React from "react";
import { Route, Switch } from "react-router-dom";
import Infrastructure from "./components/infraStructure";
import Home from "./Home";
import Devices from "./components/devices";
import ShowDevice from "./components/showDevice";
//import Chart from "./components/admin";

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact={true} />
    {/* <Route path="/admin" component={Chart} exact={true} /> */}
    <Route path="/infrastructures" component={Infrastructure} exact={true} />
    <Route path="/device/:id" component={ShowDevice} exact={true} />
    <Route
      path="/infrastructures/:id/devices"
      component={Devices}
      exact={true}
    />

    {/* <Route path="/dashboard" component={DashBoard}  /> */}
  </Switch>
);
export default Routes;
