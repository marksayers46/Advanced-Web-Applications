import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login.js";
import Header from "./components/Header.js";

export default function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        {/*add PrivateRoute to both AnimalDashboard and AddAnimal*/}
        
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};
