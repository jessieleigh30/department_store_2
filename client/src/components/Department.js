import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Segment, Button } from 'semantic-ui-react';

class Department extends React.Component {
  state = { department: {}, items: [] };

  componentDidUpdate () {
    console.log (this.state)
  }

  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/departments/${id}`)
      .then( res => {
        this.setState({ department: res.data });
      })
  }

  handleDelete = () => {
    const { id, } = this.props.match.params;
    axios.delete(`/api/departments/${id}`)
      .then( res => {
        this.props.history.push("/departments");
      })
  }

  render() {
    const { id, name, } = this.state.department;

  return (
    <div>
      <h1>{name}</h1>
      <Link to={`/departments/${id}/edit`}>
        <Button>Edit</Button>
      </Link>
      <Button onClick={this.handleDelete}>Delete</Button>
      
    </div>
  )
}
}


export default Department;
