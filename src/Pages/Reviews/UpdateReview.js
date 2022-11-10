import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/Authprovider/Authprovider";
import useTitle from "../../Hooks/useTitle";

const UpdateReview = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  useTitle("services");
  useEffect(() => {
    fetch(`https://cloud-kitchen-tau.vercel.app/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleUpdateReviews = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.value;
    const rating = event.target.rating.value;
    const reviews = event.target.reviews.value;
    // const id = event.target.id.value;
    const email = event.target.email.value;
    const additems = { name, image, rating, reviews, id, email };

    //send data
    fetch(`https://cloud-kitchen-tau.vercel.app/reviews/${id}`, {
      method: "PUT",
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
    <div>
      <h1 className=" text-center">{reviews.name} </h1>

      <div className="container w-75 bg-login py-2 rounded mt-5">
        <form onSubmit={handleUpdateReviews}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Use Name
            </label>
            <input
              defaultValue={reviews.name}
              type="text"
              class="form-control"
              name="name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              User Image
            </label>
            <input
              defaultValue={reviews.image}
              type="text"
              class="form-control"
              name="image"
              required
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Rating
            </label>
            <input
              defaultValue={reviews.rating}
              type="number"
              class="form-control"
              name="rating"
              required
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Review
            </label>
            <textarea
              defaultValue={reviews.rating}
              type="text"
              class="form-control"
              name="reviews"
              required
            />
          </div>

          {/* <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Product Id
            </label>
            <input
              type="text"
              //   defaultValue={_id}
              class="form-control"
              name="id"
              
              
            />
          </div> */}

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Email
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              class="form-control"
              name="email"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            update Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
