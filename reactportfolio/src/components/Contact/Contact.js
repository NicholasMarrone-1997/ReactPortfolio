import React from 'react';
import Nav from '../Header/Nav';
import './Contact.css';

const mailto =
"mailto:marrone1997@gmail.com?subject=Test subject&body=Body content";
const Contact = () => {
    return (
        <div>
        <Nav />
<div className="contact-wrapper">
    <h2 id="contact">Contact</h2>
    <div className="container">
        <div className="row">
        <div className="links-me col text-center">
          <a href="https://github.com/NicholasMarrone-1997"><button>Github</button></a>
          <a href="https://www.linkedin.com/in/nmarrone1/"><button>Linkedin</button></a>
          <a href={mailto} target="__blank" id="btn">
             Email
                </a>
          <a href="tel:732-275-7312"><button>Phone</button></a>
          <a href="/resume.pdf"><button type="button">Resume</button></a>
          </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Contact;