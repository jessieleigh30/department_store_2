import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";

class Items extends React.Component {
  state = { 
    items: [],
    departmentName: ""

  };


  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/departments/${id}/items`)
    .then(res => {
      this.setState ({ items: res.data, });
    })
    .catch(err => {
      console.log(err);
    })
    this.getDepartment();

}
  renderItems = () => {
    return this.state.items.map( p => (
      <ul>  
        <li key={p.id}> {p.name} {p.description} {p.price}</li>
        </ul>
      
    ));
  }

  getDepartment = () => {
    let {id} = this.props.match.params;
    axios.get(`/api/departments/${id}`)
    .then(res => {
      this.setState({
        departmentName: res.data.name
      })
    })
  }

  render() {
    let {departmentName} = this.state;
    return (
      <div>
        <br />
        <Link to="/items/new">
          <button>New Items</button>
        </Link>
        <h1> {departmentName} </h1>
        <ul>
          { this.renderItems() }
        </ul>
       
      </div>
    )
  }
}






export default Items;