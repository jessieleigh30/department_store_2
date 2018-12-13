import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Segment, Button, Card } from 'semantic-ui-react';
import { HeaderText, HeaderTwo } from "../styles/AppStyles.js";


//work on this file, this is where you can renderItems, check Spencers

class Department extends React.Component {
  state = { department: {}, items: [] };

  componentDidUpdate() {
    console.log(this.state)
  }

  //need this
  componentDidMount() {
    //this is grabbing id from props//
    const { id, } = this.props.match.params;
    axios.get(`/api/departments/${id}`)
      .then(res => {
        this.setState({ department: res.data });
        axios.get(`/api/departments/${id}/items`)
          .then(res => this.setState({ items: res.data, }))
      })
  }

  // removeItem = (id) => {
  //   const remove = window.confirm("Are you sure you want to delete this item?");
  //   const id = this.props.match.params.id;
  //   if (remove)
  //     axios.delete(`/api/departments/${dId}/items/${id}`)
  //       .then( res => {
  //         const items = this.state.items.filter( i => {
  //           if (i.id !== id)
  //             return i;
  //         })
  //         this.setState({ items, });
  //       })
  // }

  handleDelete = () => {
    const { id, } = this.props.match.params;
    axios.delete(`/api/departments/${id}`)
      .then(res => {
        this.props.history.push("/departments");
      })
  }

  removeItem = (id) => {
    const remove = window.confirm("Are you sure you want to delete this item?");
    const dId = this.props.match.params.id;
    if (remove)
      axios.delete(`/api/departments/${dId}/items/${id}`)
        .then(res => {
          const items = this.state.items.filter(i => {
            if (i.id !== id)
              return i;
          })
          this.setState({ items, });
        })
  }
  //create removeItem


  //you can put them on cards here 
  //or break the cards out into the ItemCard
  renderItems = () => {
    const { id, } = this.props.match.params;
    return this.state.items.map(p => (

      <Card>
        <Card.Content>
          <Card.Header>
            <HeaderTwo>{p.name}</HeaderTwo>
          </Card.Header>
          <br />
          <Card.Description>{p.description}</Card.Description>
          <br />
          <Card.Content extra>${p.price}</Card.Content>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="blue">
              Edit
           </Button>
            <Button onClick={() => this.removeItem(p.id)}>
              Delete
            </Button>
          </div>
        </Card.Content>

      </Card>

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
        <HeaderText large>{name}</HeaderText>
        <Link to={`/departments/${id}/items/new`}>
        <Button icon color="gray"> Add Item
        </Button>
        <br/>
        <br/>
        </Link>
        <Card.Group itemsPerRow={3}>
          {this.renderItems()}
        </Card.Group>
        <br />
        <br />
        <Link to={`/departments/${id}/edit`}>
          <Button>Edit</Button>
        </Link>
        <Button onClick={this.handleDelete}>Delete</Button>
        <Link to={`/departments/${id}/items`}>
        </Link>
      </div>
      
    )
  }
}


export default Department;
