import React from 'react';
import { Link } from 'react-router-dom';
import "../Header/Nav.css"

const Nav = () => {
    return (
    <nav className="nav row">
      <div className="col-12">
        <h1 className="logo">Nicholas Marrone</h1>
        <ul className="nav-links">
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </div>
    </nav>
    )
}

export default Nav;