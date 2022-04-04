import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <div className="flex flex-col justify-center items-center w-96 m-auto">
        <h2 className="text-red-600 text-3xl font-bold pb-4 ">
          Not foound,error <span className="text-orange-400 italic">404</span>
        </h2>
        <p className="font-bold italic text-slate-700">
          The page you are looking for no longer exists.Perhaps you can return
          back to the site's{" "}
          <Link className="text-blue-400 underline" to="/home">
            {" "}
            Homepage
          </Link>{" "}
          and see if you can find what you are looking for.Or, you can try
          finding it by using the search form below.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
