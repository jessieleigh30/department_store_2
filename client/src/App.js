import React, { Component, Fragment } from 'react';
import { Route, Switch,  } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Departments from "./components/Departments";
import Department from "./components/Department";
import DepartmentForm from "./components/DepartmentForm";

const App = () => (
  <Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component ={Home} />
      <Route exact path="/about" component ={About} />
      <Route exact path="/departments" component ={Departments} />
      <Route exact path="/departments/new" component ={DepartmentForm} />
      <Route exact path="/departments/:id" component ={Department} />
      <Route exact path="/departments/:id/edit" component ={DepartmentForm} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)

export default App;
