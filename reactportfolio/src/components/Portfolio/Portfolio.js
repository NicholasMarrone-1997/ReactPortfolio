import React from 'react';
import './Portfolio.css';
import data from './data.js';
import Nav from '../Header/Nav';
import Work from './Work';

class Portfolio extends React.Component {
    constructor() {
      super()
      this.state = {
        data,
      }
      console.log(this.state.data);
    }
    render() {
      return (
        <div>
          <Nav />
          {this.state.data.map((data, index) => {
            return <Work 
            title={data.title}
            image={data.image}
            alt={data.alt}
            repo={data.repo}
            deployed={data.deployed}
            />
          })}
        </div>
      )
    }
  }

export default Portfolio;