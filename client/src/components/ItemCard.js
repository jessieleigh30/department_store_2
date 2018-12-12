import React from "react";
import { Card, Image, Button, } from "semantic-ui-react";

const ItemCard = ({ id, name, description, price, remove }) => (
  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <br />
      <Card.Content extra>${price}</Card.Content>
      <br />
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Button inverted color="blue">
          Edit
        </Button>
        <Button inverted color="red" onClick={() => remove(id)}>
          Delete
        </Button>
      </div>
    </Card.Content>
  </Card>
)

export default ItemCard;








export default ItemCard;
