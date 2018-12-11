import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Segment, Button } from 'semantic-ui-react';

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
      <Link to={ `/departments/${p.id}/items`} key={p.id}>
      <br />
      <Segment>{p.name}</Segment>
      </Link>
    ));
  }

  render() {
    return (
      <div>
        <br />
        <Link to="/departments/new">
          <Button> New Department</Button>
        </Link>
        <ul>
          { this.renderDepartments() }
        </ul>
      </div>
    )
  }
}


export default Departments;