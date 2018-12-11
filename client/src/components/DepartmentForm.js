import React from "react";
import axios from "axios";

class DepartmentForm extends React.Component {
  state = { name: "", };

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
  if (id) {
    axios.put(`/api/departments/${id}`, department )
      .then( res => {
        this.props.history.push(`/departments/${id}`)
      })
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
    <form onSubmit={this.handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={name}
        onChange={this.handleChange}
        required
      />
      <button>Submit</button>
    </form>
  )
}
}






export default DepartmentForm;
