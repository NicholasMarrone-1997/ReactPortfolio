import React from 'react';

const Nav = () => {
    return (
    <nav className="nav row">
      <div className="col-12">
        <h1 className="logo">Nicholas Marrone</h1>
        <ul className="nav-links">
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </div>
    </nav>
    )
}

// const BooksList = ({books}) => {
//     return (
//       <ul>
//         {books.map(book => {
//           return <li>book</li>
//         })}
//       </ul>
//     )
//    }

export default Nav;