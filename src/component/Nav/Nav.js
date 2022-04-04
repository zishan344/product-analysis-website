import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-orange-300">
      <div className="flex justify-between max-w-screen-lg mx-auto items-center py-4 flex-col md:flex-row">
        <div>
          <h2 className="text-3xl text-blue-400 font-bold">Bike-Lovers.com</h2>
        </div>
        <div className="flex gap-2 flex-wrap justify-center md:justify-end">
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold mr-4 text-blue-400" : "font-bold mr-4"
            }
            to="/home"
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold   text-blue-400" : "font-bold mr-4"
            }
            to="/review"
          >
            REVIEWS
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold   text-blue-400" : "font-bold mr-4"
            }
            to="/dashboard"
          >
            DASHBOARD
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold   text-blue-400" : "font-bold mr-4"
            }
            to="/blog"
          >
            BLOGS
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold   text-blue-400" : "font-bold mr-4"
            }
            to="/about"
          >
            ABOUT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
