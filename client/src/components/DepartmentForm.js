import React from "react";
import axios from "axios";
import { Form, Button} from "semantic-ui-react"

class DepartmentForm extends React.Component {
  state = { name: "", };

  //don't need a component did mount unless we are going to edit//
componentDidMount() {
  const {id} = this.props.match.params;
  if (id)
    axios.get(`/api/departments/${id}`)
      .then( res => {
        const { name } = res.data;
        this.setState({ name });
      })
}

handleChange = (e) => {
  const { target: { name, value, } } = e;
  this.setState({ [name]: value, });
}

handleSubmit = (e) => {
  e.preventDefault();
  const department = { ...this.state };
  const { id } = this.props.match.params;
  //if there is an id, this means it needs to edit
  if (id) {
    axios.put(`/api/departments/${id}`, department )
      .then( res => {
        this.props.history.push(`/departments/${id}`)
      })
      //if it doesn't have an id, render new
  } else {
    axios.post("/api/departments", department)
      .then( res => {
        this.props.history.push("/departments")
      })
  }
}

render() {
  const { name, } = this.state;
  return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Input
        name="name"
        placeholder="Name"
        label="Name of Department"
        value={name}
        onChange={this.handleChange}
        required
      />
      <Form.Button>Submit</Form.Button>
    </Form>
  )
}
}






export default DepartmentForm;
