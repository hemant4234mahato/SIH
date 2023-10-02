import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        WEBSITE
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open " : ""}>
        <li>
          <NavLink to="/About">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/Service">SERVICE</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">CONTACT</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
