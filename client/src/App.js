import React, { Component, Fragment } from 'react';
import { Route, Switch, } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Departments from "./components/Departments";
import Department from "./components/Department";
import DepartmentForm from "./components/DepartmentForm";
import Items from "./components/Items";
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import ItemForm from "./components/ItemForm";
import Item from "./components/Item";
import ReviewForm from "./components/ReviewForm"
// import AppContainer from "./styles/AppStyles";


const App = () => (
  <AppContainer>
    <Fragment>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/departments" component={Departments} />
          <Route exact path="/departments/new" component={DepartmentForm} />
          <Route exact path="/departments/:id/edit" component={DepartmentForm} />
          <Route exact path="/departments/:id" component={Department} />
          <Route exact path="/departments/:id/items/new" component={ItemForm} />
          <Route exact path="/departments/:id/items/:itemId" component={Item} />
          <Route exact path="/departments/:id/items/:itemId/edit" component={ItemForm} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </Fragment>
  </AppContainer>
)

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, #EDC7B7 10%, #EEE2DC );
  height: 350vh;
`;



export default App;
