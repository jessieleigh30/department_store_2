import React from "react";
import { Card, Image, Button, } from "semantic-ui-react";
import { Link, } from "react-router-dom";
import { HeaderText, HeaderTwo } from "../styles/AppStyles.js";

const ItemCard = ({ id, name, description, price, remove, department_id }) => (
  
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
  <Card.Content extra>
    <div className="ui three buttons">
    <Link to={`/departments/${department_id}/items/${id}/edit`}>
      <Button basic color="blue">
        Edit
     </Button>
     </Link>
      <Button basic color="blue" onClick={() => remove(id)}>
        Delete
      </Button>
      <Link to ={`/departments/${department_id}/items/${id}`}>
      <Button basic color="blue">
        Show
      </Button>
      </Link>
    </div>
  </Card.Content>

</Card>
)

export default ItemCard;
