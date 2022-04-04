import React from "react";

const Blog = () => {
  return (
    <div className="max-w-screen-lg mx-auto min-h-screen">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 my-10 ">
        <div className="shadow-lg px-4 py-3">
          <h2 className="font-bold text-2xl text-blue-400 italic pb-4">
            What is HTML Sementic Tag?
          </h2>
          <p>
            A semantic HTML element is a machine and a human can understand it
            as well as they understand. it to be a {"<nav><nav/>"} tag it also
            meanig it use to a navigation bar. like an{" "}
            {"<article><article/> tag"} and also a write an article like this
            example:
            <ul className="">
              <li className="text-semibold text-slate-800">1. {"<aside>"}</li>
              <li className="text-semibold text-slate-800">2. {"<details>"}</li>
              <li className="text-semibold text-slate-800">
                3. {"<figcaption>"}
              </li>
              <li className="text-semibold text-slate-800">4. {"<figure>"}</li>
              <li className="text-semibold text-slate-800">5. {"<footer>"}</li>
              <li className="text-semibold text-slate-800">6. {"<header>"}</li>
              <li className="text-semibold text-slate-800">
                7. {"<main></main>"}
              </li>
            </ul>
          </p>
        </div>
        <div className="shadow-lg px-4 py-3">
          <h2 className="font-bold text-2xl text-blue-400 italic pb-4">
            What is context API?
          </h2>
          <p>
            Context API is a React structure. This frees us from props drilling.
            It is very easy to transfer data from one place to another. This is
            the alternative to "prop drilling".or moving props from grandparent
            to child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux. If we use it, we
            don't have to do props drilling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
