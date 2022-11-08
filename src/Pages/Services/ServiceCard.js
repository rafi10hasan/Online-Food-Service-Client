import React from "react";
import { Button, Card } from "react-bootstrap";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title,description } = service;
  return (

    <div>
      <Card>
        <Card.Img variant="top"  src={img} />
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <h6>{price}</h6>
          <Card.Text>
            {description.slice(0,200)}...
          </Card.Text>

          <Button variant="primary">Go Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;
