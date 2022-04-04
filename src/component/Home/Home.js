import React from "react";
import ReviewData from "../../Hooks/ReviewData";
const Home = () => {
  const [reviews, setReviews] = ReviewData();

  return (
    <div className="">
      <div className=" max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 ">
          <div>
            <h2 className="font-bold text-4xl text-center text-slate-800">
              Choose your favorite Motor bike {"&"}{" "}
            </h2>
            <h2 className="font-bold text-4xl pb-4 text-red-400 text-center">
              See the customar Reviews
            </h2>

            <p className="font-semibold">
              The 100 bike is perfect for commuters, errand runners,
              cost-conscious riders, shoppers, and anyone who appreciates great
              value. This bike is an easy-to-use mode of transportation and will
              effortlessly get you where you need to go. The frame color is
              black.
            </p>
            <div className="my-4">
              <button className="bg-purple-300 font-semibold px-4 rounded text-1xl py-3 shadow-md">
                Live Demo
              </button>
            </div>
          </div>
          <div>
            <img
              src={
                "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnQlMjBiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
