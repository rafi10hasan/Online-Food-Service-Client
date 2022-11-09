import React from "react";

const ReviewCard = ({ review }) => {
  const { name, image, rating, reviews, email } = review;
  return (
    <div>
      <div class="card">
       <div className="text-center">
       <img src={image} class="card-img-top w-25 h-25 rounded-circle mt-2" alt="..." />
       </div>
        <div class="card-body">
          <h6>user Name: {name} </h6>

          <h6>Rating: {rating} </h6>
          <p> <b>Reviews:</b>{reviews} </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
