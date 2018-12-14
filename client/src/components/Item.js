import React from "react";
import axios from 'axios';
import { Card, Button, Grid, Segment, Rating, Image } from "semantic-ui-react";
import { HeaderText, HeaderTwo } from "../styles/AppStyles.js";
import ReviewForm from "./ReviewForm";

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
    this.setState({ showForm: !this.state.showForm,  });
  }

  addReview = (review) => {
    this.setState({ reviews: [review, ...this.state.reviews], });
  }

  showReviews = () => {

    return this.state.reviews.map( r => (
      <Card fluid>
      <Card.Content>
        <Rating defaultRating={r.rating} maxRating={5} disabled icon="star" size="small"/>
        <br />
        <br />
        <Card.Header>{ r.title }</Card.Header>
        <Card.Meta>{ r.author }</Card.Meta>
        <Card.Description>
          { r.body }
        </Card.Description>
      </Card.Content>
    </Card>
    ))
  }

  renderReviewForm = () => {
    const {showForm} = this.state
    if (showForm)
    return (
      <ReviewForm />
    )
    return null;

  
  }

  render() {
    const { name, description, price } = this.state.item
      
    return (
      <div>
        <br/>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Card>
              <Image src="https://picsum.photos/300?random" alt=""/>
                <Card.Content>
                  <Card.Header>
                    <HeaderTwo>{name}</HeaderTwo>
                  </Card.Header>
                  <br />
                  <Card.Description>{description}</Card.Description>
                  <br />
                  <Card.Content extra>${price}</Card.Content>
                </Card.Content>
              </Card>

            </Grid.Column>
            <Grid.Column>
            <Button onClick={() => this.toggleForm()}>
                Add Review 
            </Button>
                <Segment textAlign="center">
                <h1>Reviews</h1>
                <hr />
                 { this.renderReviewForm() }
                { this.showReviews() }
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )


  }

};

export default Item;
