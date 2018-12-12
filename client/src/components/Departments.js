import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Segment, Button, Header } from 'semantic-ui-react'; 
import styled from "styled-components";
import {HeaderText, HeaderTwo} from "../styles/AppStyles.js";



class Departments extends React.Component {
  state = { 
    departments: [], 
  };

  componentDidMount() {
    axios.get('/api/departments')
    .then(res => {
      this.setState ({ departments: res.data, });
    })
    .catch(err => {
      console.log(err);
    })

}
  renderDepartments = () => {
    return this.state.departments.map( p => (
      //add /items to take it to the items show page here
      <Link to={ `/departments/${p.id}`} key={p.id}>
      <br />
      <Segment>
        <HeaderTwo>{p.name}</HeaderTwo>
      </Segment>
      </Link>
    ));
  }
  
  render() {
    return (
      <div>
        <br />
        <HeaderText large> Departments </HeaderText>
        <Link to="/departments/new">
          <Button> New Department</Button>
        </Link>
        <ul>
        {this.renderDepartments()}
        </ul>
      </div>
    )
  }
}




export default Departments;