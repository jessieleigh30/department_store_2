import React from "react";
import axios from "axios";
import { Form } from "semantic-ui-react";

class ItemForm extends React.Component {
  state = {name: "", description: "", price: ""};

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState ({ [name]: value, });
  }

// add handleSubmit

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const
  // }

  

  render (){
    const { name, description, price } = this.state

   return (
      <div>
        <Form onSubmit = {this.handleSubmit}>
        <Form.Group>
          <Form.Input
          name="name"
          placeholder="Name"
          label="Name"
          required
          value={name}
          onChange={this.handleChange}
          />
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

        </Form>
      </div>
    )
  }
}

export default ItemForm;