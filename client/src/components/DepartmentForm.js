import React from "react";
import axios from "axios";

class DepartmentForm extends React.Component {
  state = { name: "", };

componentDidMount() {
  const {id} = 
}



  componentDidMount() {
    // const { match: { params: { id } } } = this.props;
    const { id } = this.props.match.params;
    if (id)
      axios.get(`/api/products/${id}`)
        .then( res => {
          const { name, description, price, department, } = res.data;
          this.setState({ name, description, price, department, });
        })
  }




export default DepartmentForm;
