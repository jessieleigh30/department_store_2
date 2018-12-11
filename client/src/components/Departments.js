import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";

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
      <li >{p.name}</li>
      </Link>
    ));
  }

  render() {
    return (
      <div>
        <br />
        <Link to="/departments/new">
          <button>New Department</button>
        </Link>
        <ul>
          { this.renderDepartments() }
        </ul>
        <h1></h1>
      </div>
    )
  }
}


export default Departments;