import React from "react";
import axios from 'axios';
import { Card, Button, Grid } from "semantic-ui-react";
import { HeaderText, HeaderTwo } from "../styles/AppStyles.js";

class Item extends React.Component {
  state = { item: {}, reviews: [] };


  componentDidMount () {
    axios.get(`api/${this.props.match.url}`)
      .then( res => this.setState({...res.data, }))
    }

  
  render() {
    const { name, description, price } = this.state

      return (
      <div>
    <Grid columns={2}>
    <Grid.Row>
      <Grid.Column>
      <Card>
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
      </Grid.Row>
      </Grid>
    </div>
    )


      }  

};

export default Item;
