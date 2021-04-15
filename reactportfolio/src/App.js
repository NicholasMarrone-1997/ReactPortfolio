// import logo from './logo.svg';
import './App.css';
import Nav from "../src/components/Header/Nav";
import About from "../src/components/About/About";
import Portfolio from "../src/components/Portfolio/Portfolio";
import Resume from "../src/components/Resume/Resume";
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>

    <Switch>
          <Route exact path="/">
            <div className="App">
              <section className="nav-home">
                <Nav />
              </section>
            </div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
           <Route path="/portfolio">
            <Portfolio />
          </Route>
          {/*<Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route> */}
        </Switch>
    </Router>
  );
}

export default App;
