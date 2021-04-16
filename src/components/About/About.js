import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Header/Nav';
import './About.css';

const About = () => {
    return(
  <div className="page">
      <Nav />
  <div className="container">
    <div className="row">
        <div className="col">
          <h2 id="about">About Me</h2>
          <img id="headshot" src='/headshot.jfif' alt="Italian Trulli" />
        </div>
      </div>

        <div className="col">
          <p className="about-me">Hello, my name is Nicholas Marrone. I am 24 years old and am originally from Atlantic
            Highlands, NJ. I graduated from the University of North Carolina at Charlotte in 2019 with a BS in Computer
            Science. I am currently attending a full-stack web development bootcamp where I hope to hone my skills as a
            web
            developer.</p>
        </div>
      </div>
      <Footer />
    </div>
    )
}

export default About;