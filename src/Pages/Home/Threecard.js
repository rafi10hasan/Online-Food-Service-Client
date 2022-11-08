import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Threecard = ({ service }) => {
  const { _id, img, price, title, description } = service;
  return (

    <div className="mt-5">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <h6>{price}</h6>
          <Card.Text>{description.slice(0, 200)}...</Card.Text>
        </Card.Body>
      </Card>
      
    </div>
  );
};

export default Threecard;
