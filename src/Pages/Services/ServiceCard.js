import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title,description } = service;
  console.log(service)
  return (

    <div>
      <Card>
        <Card.Img variant="top"  src={img} />
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <h6>{price}</h6>
          <Card.Text>
            {description.slice(0, 100)}...
          </Card.Text>
            <Link to={`/services/${_id}`}>
            <Button variant="primary">Go Details</Button>
            </Link>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;

