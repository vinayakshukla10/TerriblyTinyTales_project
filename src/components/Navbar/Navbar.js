import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h3 className="logo">STORIES</h3>
            <ul className="nav-links">
                <Link to="/" className="Courses">
                    <li>Courses</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar