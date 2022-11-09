import React from "react";
import { Card } from "react-bootstrap";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Threecard = ({ service }) => {
  const { _id, img, price, title, description } = service;
  return (
    <div className="mt-5">
      <Card>
        <PhotoProvider>
          <PhotoView src={img}>
            <Card.Img variant="top" src={img} />
          </PhotoView>
        </PhotoProvider>

        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <h6>{price}</h6>
          <Card.Text>{description.slice(0, 100)}...</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Threecard;
