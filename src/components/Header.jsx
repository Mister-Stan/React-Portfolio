import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="headerLine">
               
        <ul className="navbarLinks">
          <li>
            <Link to="/"><h2>Homepage</h2></Link>
          </li>
          <li>
            <Link to="/projects"><h2>Projects</h2></Link>
          </li>
          <li>
            <Link to="/contact"><h2>Contact</h2></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
