import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const MyreviewsCard = ({ review }) => {
  const { name, image, rating, reviews, email } = review;

  const handledeletereview = (id) => {
    // document.location.reload()
    const proceed = window.confirm("Are you sure delete?");
    if (proceed) {
      console.log("deleting", id);
      const url = `https://cloud-kitchen-tau.vercel.app/reviews/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
          }
        });
    }
  };
  return (
    <div>
      <div class="card">
        <div className="text-center">
          <img src={image} class="card-img-top w-25 h-25 rounded-circle mt-2" alt="..." />
        </div>
        <div class="card-body">
          <h6>user Name: {name} </h6>

          <h6>Rating: {rating} </h6>
          <p>
            {" "}
            <b>Reviews:</b>
            {reviews}{" "}
          </p>
          <button className="btn" onClick={() => handledeletereview(review._id)}>
            {" "}
            x{" "}
          </button>

          <button className="btn btn-primary ">
            <Link className="text-decoration-none text-white" to={`/update/${review._id}`}>
              {" "}
              Update Review
            </Link>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyreviewsCard;
