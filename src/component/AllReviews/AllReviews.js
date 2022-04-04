import React from "react";
import ReviewData from "../../Hooks/ReviewData";
import Revews from "../Revews/Revews";

const AllReviews = () => {
  const [reviews, setReviews] = ReviewData();
  return (
    <div>
      <h1 className="text-3xl text-purple-400 font-bold text-center py-5">
        Total Review {reviews.length}
      </h1>
      <div className="grid grid-cols-2 gap-10 py-8 max-w-screen-lg mx-auto">
        {reviews.map((review, index) => (
          <Revews key={index} reviews={review}></Revews>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
