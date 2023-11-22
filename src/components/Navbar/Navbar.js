import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="content">
          <img className="ttt" src="./ttt.png" alt="" />
        </div>
        <div className="divider">

        </div>

        <h3 className="Logo">STORIES</h3>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="Courses">
            Courses
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
