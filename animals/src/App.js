import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login.js";
import Header from "./components/Header.js";
import PrivateRoute from "./components/utils/PrivateRoute";
import AnimalDashboard from "./components/AnimalDashboard";
import AddAnimal from "./components/AddAnimal";

export default function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        {/*Build out a PrivateRoute to both AnimalDashboard and AddAnimal*/}
        <PrivateRoute exact path = "/creatures" component={AnimalDashboard}/>
        <PrivateRoute exact path = "/add" component={AddAnimal}/>
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};
