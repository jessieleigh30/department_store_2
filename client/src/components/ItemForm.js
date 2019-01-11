import React from "react";
import axios from "axios";
import { Form, } from "semantic-ui-react";

class ItemForm extends React.Component {
  state = {name: "", description: "", price: "",};


 

  componentDidMount() {
    const {id, itemId} = this.props.match.params;
    if (itemId)
    
      axios.get(`/api/departments/${id}/items/${itemId}`)
        .then( res => { 
          const {name, description, price} = res.data
          this.setState({name, description, price })
        })
  }



  //add for edit here
  handleSubmit = (e) => {
    e.preventDefault();
    const { id, itemId } = this.props.match.params;
    const { push } = this.props.history;
    //this is the two lines of code above but combined into one
     
    if (itemId) {
      axios.put(`/api/departments/${id}/items/${itemId}`, {...this.state})
        .then( res => push (`/departments/${id}`))
    }
    else {
    axios.post(`/api/departments/${id}/items`, {...this.state})
    .then( res => push(`/departments/${id}`)
    )
  }
  };




  render (){
    const { name, description, price } = this.state;
    const { itemId} = this.props.match.params;

   return (
      <div>
        <h1>{itemId ? "Edit Item" : "Add Item"}</h1>
        <Form onSubmit = {this.handleSubmit}>
        <Form.Group>
          Ig
            <Form.Input
          name="description"
          placeholder="Description"
          label="Description"
          required
          value={description}
          onChange={this.handleChange}
          />
           <Form.Input
          name="price"
          placeholder="Price"
          label="Price"
          required
          value={price}
          onChange={this.handleChange}
          />
         
        </Form.Group>
        <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default ItemForm;