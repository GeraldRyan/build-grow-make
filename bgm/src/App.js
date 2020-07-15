import React from "react";
// import logo from "./logo.svg";
import gearimg from "./crossedtools.svg";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="pre banner flexed-centered">Build Grow Make</div>
        <img src={gearimg} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <div className="pre flexed-centered">
          <Link to="/">
            {/* <a href="/">Home </a> */}
            Home
          </Link>
          <Link to="/projects">
            Projects
            {/* <a href="/projects">Projects </a> */}
          </Link>
          <Link to="/blog">
            Blog
            {/* <a href="/blog">Blog </a> */}
          </Link>
          <Link to="/about">
            About
            {/* <a href="/about">About</a> */}
          </Link>
        </div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter Site
        </a> */}
      </div>
    </div>
  );
}

export default App;
