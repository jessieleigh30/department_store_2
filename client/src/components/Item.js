import React from "react";
import axios from 'axios';
import { Card, Button, Grid, Segment, Rating, Image } from "semantic-ui-react";
import { HeaderText, HeaderTwo, AddButton } from "../styles/AppStyles.js";
import ReviewForm from "./ReviewForm";
import styled from 'styled-components';

class Item extends React.Component {
  state = { item: {}, reviews: [], showForm: false, };


  componentDidMount() {
    const { itemId, id } = this.props.match.params;
    axios.get(`/api/departments/${id}/items/${itemId}`)
      .then(res => this.setState({ item: res.data, }))
    axios.get(`/api/items/${itemId}/reviews`)
      .then(res => this.setState({ reviews: res.data, }))
    
  
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm, });
  }

  addReview = (review) => {
    this.setState({ reviews: [review, ...this.state.reviews], });
  }

  removeReview = (id) => {
    const { itemId } = this.props.match.params;
    const confirm = window.confirm("Are you sure?");
    if (confirm)
      axios.delete(`/api/items/${itemId}/reviews/${id}`)
        .then( res => {
          const reviews = this.state.reviews.filter( r => {
            if (r.id !== id)
              return r;
          })
          this.setState({ reviews, });
        })
  }


  showReviews = () => {

    return this.state.reviews.map(r => (
      <Card fluid key={r.id}>
        <Card.Content>
          <Rating defaultRating={r.rating} maxRating={5} disabled icon="star" size="small" />
          <br />
          <br />
          <Card.Header>{r.title}</Card.Header>
          <Card.Meta>{r.author}</Card.Meta>
          <Card.Description>
            {r.body}
          </Card.Description>
          <Button onClick ={()=> this.removeReview(r.id) }> Delete </Button>
          <Button> Edit </Button>
        </Card.Content>
      </Card>
    ))
  }

  renderReviewForm = () => {
    const { itemId } = this.props.match.params;
    const { showForm } = this.state
    if (showForm)
      return (
        <ReviewForm 
        toggle={this.toggleForm} 
        itemId={itemId} 
          add={this.addReview}
        />
         
      )
    return null;


  }


  render() {
    const { name, description, price } = this.state.item
    let averageRatingSum = 0;
    let ratingCount = 0;
    let averageRating = 0;
    this.state.reviews.forEach(review => {
      averageRatingSum = averageRatingSum + review.rating;
      ratingCount = ratingCount + 1;
    })
    averageRating = averageRatingSum / ratingCount;
    console.log(averageRating.toFixed(2));


    return (
      <div>
        <br />
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Card>
                <Image src="https://picsum.photos/300?random" alt="" />
                <Card.Content>
                  <Card.Header>
                    <HeaderTwo>{name}</HeaderTwo>
                  </Card.Header>
                  <br />
                  <Card.Description>{description}</Card.Description>
                  <br />
                  <Card.Content extra>${price}</Card.Content>
                  <ProductRating>
                    Rating: {averageRating.toFixed(2)}
                  </ProductRating>
                </Card.Content>
              </Card>

            </Grid.Column>
            <Grid.Column>
              <Segment className="review-container">
                <div>
                <h1 style={{ textAlign: "center", color: "#123C69", fontSize: "3em" }}>Reviews</h1>
                <Button onClick={() => this.toggleForm()}>
                Add Review
                </Button>
                  <hr />
                  {this.renderReviewForm()}
                  {this.showReviews()}
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
};

const ProductRating = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 14px;
  padding: 14px;
`;

export default Item;
{/* <div>
<h1 style={{ textAlign: "center" }}>Reviews</h1>
<Button icon color="purple" onClick={this.toggleForm}>
  <Icon name='chess queen' />
  Add Review
</Button>
</div> */}