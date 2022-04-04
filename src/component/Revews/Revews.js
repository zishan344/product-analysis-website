import React from "react";

const Revews = ({ reviews }) => {
  const { name, picture, rating, review } = reviews;

  return (
    <div className="shadow-lg px-4 pb-10 relative">
      <div className="flex justify-center  ">
        <img className="w-44 h-44 rounded-full" src={picture} alt="" />
      </div>
      <div>
        <h2 className="font-bold text-2xl text-orange-500">
          {" "}
          rating: {rating}
        </h2>
        <p>{review}</p>
        <h1 className="text-red-400 text-1xl font-bold absolute bottom-4">
          User: {name}
        </h1>
      </div>
    </div>
  );
};

export default Revews;
