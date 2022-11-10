import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/Authprovider/Authprovider";
import useTitle from "../../Hooks/useTitle";
import ReviewCard from "./ReviewCard";

const ServicesDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const { _id, price, img, title, description } = data;
  useTitle("services");

  const [reviews, setReviews] = useState([]);
  useTitle("reviews");
  useEffect(() => {
    fetch("https://cloud-kitchen-tau.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleAdduser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.value;
    const rating = event.target.rating.value;
    const reviews = event.target.reviews.value;
    const id = event.target.id.value;
    const email = event.target.email.value;
    const additems = { name, image, rating, reviews, id, email };

    //send data
    fetch("https://cloud-kitchen-tau.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(additems),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("Item Added successfully");
        event.target.reset();
      });
  };

  return (
    <div className="container mx-auto mt-5">
      <Card className="w-75 container py-3">
        <Card.Img height="500px" variant="top" className="rounded" src={img} />
        <Card.Body className="course-name">
          <Card.Title className="fw-bold">services name:{title}</Card.Title>
          <Card.Text>
            <b>Details:</b> {description}
          </Card.Text>
          <p>
            {" "}
            <b>Price:</b>
            {price}
          </p>
        </Card.Body>
      </Card>

      <h1 className="text-center">Add Review</h1>
      {user?.email ? (
        <>
          <div className="container w-75 bg-login py-2 rounded mt-5">
            <form onSubmit={handleAdduser}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Use Name
                </label>
                <input type="text" class="form-control" name="name" required />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  User Image
                </label>
                <input type="text" class="form-control" name="image" required />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Rating
                </label>
                <input type="number" class="form-control" name="rating" required />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Review
                </label>
                <textarea type="text" class="form-control" name="reviews" required />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Product Id
                </label>
                <input
                  type="text"
                  defaultValue={_id}
                  class="form-control"
                  name="id"
                  required
                  readOnly
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  class="form-control"
                  name="email"
                  required
                  readOnly
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Add Review
              </button>
            </form>
          </div>
        </>
      ) : (
        <p className="text-center">
          if you want to give a Review you have to Login First{" "}
          <Link className="text-decoration-none text-primary fw-bold fs-4" to="/login">
            Login
          </Link>
        </p>
      )}

      <div className="container">
        <h1 className="text-center mt-5">All User Review</h1>
        <div className="row row-cols-1 row-cols-lg-3 d-flex justify-content-center align-items-center g-3">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
