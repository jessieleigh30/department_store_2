import React from "react";
import axios from "axios";
import { Form, Rating } from "semantic-ui-react";

//need class because we need state
//need componentDidMount?

class ReviewForm extends React.Component {
  state = { title: "", body: "", author: "", rating: 0, };


  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, });
  }

  handleRating = (e, { rating }) => {
    this.setState({ rating, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/items/${this.props.itemId}/reviews`, { ...this.state, })
      .then( res => this.props.add(res.data) )
    this.props.toggle();  
  }

  render() {
    const {title, body, author, rating}= this.state
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group width = "equal">
            <Form.Input 
              name="title"
              label="Title"
              placeholder="Title"
              required 
              value={title}
              onChange={this.handleChange}
            />
            <Form.Input 
              name="body"
              label="Body"
              placeholder="Body"
              required
              value={body}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group width = "equal">
            <Form.Input 
              name="author"
              label="Author"
              placeholder="Author"
              required
              value={author}
              onChange={this.handleChange}
              />
              <Rating
              name="rating"
              icon='star'
              defaultRating={1}
              maxRating={5}
              rating={rating}
              onRating={this.handleRating}
              size="huge"
               />
          
          </Form.Group>
          <Form.Button> Submit </Form.Button>
        </Form>
      </div>

    )
  }
}







export default ReviewForm;