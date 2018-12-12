import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Segment, Button } from 'semantic-ui-react';
import {HeaderText, HeaderTwo} from "../styles/AppStyles.js";

//work on this file, this is where you can renderItems, check Spencers

class Department extends React.Component {
  state = { department: {}, items: [] };

  componentDidUpdate () {
    console.log (this.state)
  }

  //need this
  componentDidMount() {
    //this is grabbing id from props//
    const { id, } = this.props.match.params;
    axios.get(`/api/departments/${id}`)
      .then( res => {
        this.setState({ department: res.data });
    axios.get(`/api/departments/${id}/items`)
        .then( res => this.setState ({ items: res.data,}))
      })
  }

  handleDelete = () => {
    const { id, } = this.props.match.params;
    axios.delete(`/api/departments/${id}`)
      .then( res => {
        this.props.history.push("/departments");
      })
  }
  

  //you can put them on cards here 
  renderItems = () => {
    const { id, } = this.props.match.params;
    return this.state.items.map( p => (
      <Link to={ `/departments/${p.id}/items`} key={p.id}>
      < br />
      <Segment>
        {/* //style this// */}
        <HeaderTwo>{p.name} {p.description} {p.price}</HeaderTwo>
      </Segment>
       </Link>
    ))
  }

  


  // renderDepartments = () => {
  //   return this.state.departments.map( p => (
  //     //add /items to take it to the items show page here
  //     <Link to={ `/departments/${p.id}`} key={p.id}>
  //     <br />
  //     <Segment>
  //       {p.name}
  //     </Segment>
  //     </Link>
  //   ));
  // }

  render() {
    //this is getting what we need from state
    const { id, name, } = this.state.department;
    

  return (
    <div>
      <h1>{name}</h1>
      <Link to={`/departments/${id}/edit`}>
        <Button>Edit</Button>
      </Link>
      <Button onClick={this.handleDelete}>Delete</Button>
        <Link to={`/departments/${id}/items`}>
      <Button> See Items </Button>
      </Link>
      
      {this.renderItems()}
    </div>
    //this is where you can renderItems so put that in here
  )
}
}


export default Department;
