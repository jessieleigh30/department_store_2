import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Segment, Button, Image, Card } from 'semantic-ui-react';
import styled from "styled-components";
import { HeaderText, HeaderTwo } from "../styles/AppStyles.js";



class Departments extends React.Component {
  state = {
    departments: [],
  };

  componentDidMount() {
    axios.get('/api/departments')
      .then(res => {
        this.setState({ departments: res.data, });
      })
      .catch(err => {
        console.log(err);
      })

  }
  // this is where you can put the entire card/segment 
  // This is what Spencer has on this page, this is where you put the entire
  //card segment, be sure to import card from semantic
  renderDepartments = () => {
    return this.state.departments.map(p => (
      //add /items to take it to the items show page here
      
      
        <Card>
          <Card.Content>
          <Image src="https://picsum.photos/300?random" alt=""/>
            <Card.Header>
              <HeaderTwo>{p.name}</HeaderTwo>
            </Card.Header>
          </Card.Content>
          <Card.Content textAlign="center">
          <Link to={`/departments/${p.id}`} key={p.id}>
          <Button>
            View
          </Button>
          </Link>
          </Card.Content>
        </Card>
     
    ));
  }

  render() {
    return (
      <div>
        <br />
        <HeaderText large> Departments </HeaderText>
        <br/>
        <br/>
        <Card.Group itemsPerRow={3}>
          {this.renderDepartments()}
        </Card.Group>
        < br/>
        <Link to="/departments/new">
          <Button> Add New Department</Button>
        </Link>
      </div>
    )
  }
}





export default Departments;