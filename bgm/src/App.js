import React from "react";
// import logo from "./logo.svg";
import gearimg from "./crossedtools.svg";
import "./App.css";

import { Route, Link, Switch } from "react-router-dom";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="pre banner flexed-centered">Build Grow Make</div>
        <img src={gearimg} className="App-logo" alt="logo" />
      </header>
      <body className="App-body">
        <div className="pre flexed-centered">
          <a href="/">Home </a>
          <a href="/projects</div>">Projects </a>
          <a href="/blog">Blog </a>
          <a href="/about">About</a>
        </div>
        <Route path="/blog">
          <Blog />
        </Route>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter Site
        </a> */}
      </body>
    </div>
  );
}

export default App;
