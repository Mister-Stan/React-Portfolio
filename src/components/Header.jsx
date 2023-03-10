import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className='headerLine'>
      <h1>Eugeniu Stan</h1>
      <ul className='navbarLinks'>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Header
