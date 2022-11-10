import React, { useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import MyreviewsCard from "./MyreviewsCard";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);

  useTitle("reviews");
  useEffect(() => {
    fetch("https://cloud-kitchen-tau.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  useTitle("myreviews");
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-3 d-flex justify-content-center align-items-center g-3">
        {reviews.map((review) => (
          <MyreviewsCard key={reviews._id} review={review}></MyreviewsCard>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
//row row-cols-1 row-cols-lg-3 d-flex justify-content-center align-items-center g-3
