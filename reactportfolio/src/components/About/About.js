import React from 'react';
import Nav from '../Header/Nav';
import './About.css';

const About = () => {
    return(
      <div>
      <Nav />
    <div className="about-wrapper row">
        <div className="col-md-6">
          <h2 id="about">About Me</h2>
          <img id="headshot" src='/headshot.jfif' alt="Italian Trulli" />
        </div>

        <div className="col-md-6">
          <p className="about-me">Hello, my name is Nicholas Marrone. I am 24 years old and am originally from Atlantic
            Highlands, NJ. I graduated from the University of North Carolina at Charlotte in 2019 with a BS in Computer
            Science. I am currently attending a full-stack web development bootcamp where I hope to hone my skills as a
            web
            developer.</p>
        </div>
      </div>
      </div>
    )
}

export default About;