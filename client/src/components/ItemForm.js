import React from "react";
import axios from "axios";
import { Form } from "semantic-ui-react";

class ItemForm extends React.Component {
  state = {name: "", description: "", price: ""};


  //add a componentDidMount to check the id//
  //need to fix this

  // componentDidMount() {
  //   const {id, itemId} = this.props.match.params;
  //   if (itemId)
  //     axios.get(`/api/departments/${id}/items/${itemId}`)
  //       .then( res => {
  //         this.setState({...res.data, }))
  // };

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState ({ [name]: value, });
  }

  //add for edit here
  handleSubmit = (e) => {
    e.preventDefault();
    // const { id } = this.props.match.params;
    // cons { push } = this.props.history;
    //this is the two lines of code above but combined into one
    const { match: {params: {id, itemId }}, history: {push} } = this.props;
    if (itemId) {
      axios.put(`api/departments/${id}/items/${itemId}`, {...this.state})
        .then( res => push (`/departments/${id}`))
    }
    else {
    axios.post(`api/departments/${id}/items`, {...this.state})
    .then( res => {
      this.push(`/departments/${id}`)
    })
  }
  };




  render (){
    const { name, description, price } = this.state
    const {id, itemId} = this.props.match.params;

   return (
      <div>
        <h1>{itemId ? "Edit Item" : "Add Item"}</h1>
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
        <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default ItemForm;