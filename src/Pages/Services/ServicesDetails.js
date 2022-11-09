import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const ServicesDetails = () => {
  const data = useLoaderData();
  const { _id, price, img, title, description } = data;
  useTitle("services");

  return (
    <div className="container mx-auto mt-5">
      <Card className="w-75 container py-3">
        <Card.Img height="500px" variant="top" className="rounded" src={img} />
        <Card.Body className="course-name">
          <Card.Title className="fw-bold">services name:{title}</Card.Title>
          <Card.Text><b>Details:</b> {description}</Card.Text>
          <p> <b>Price:</b>{price}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServicesDetails;
