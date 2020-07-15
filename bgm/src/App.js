import React from "react";
import logo from "./logo.svg";
import tool from "./crossedtools.svg";
import "./App.css";
import Blog from './components/Blog'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="pre banner flexed-centered">
          <p>Build </p>
          <p>Grow </p>
          <p>Make</p>
        </div>
        <img src={tool} className="App-logo" alt="logo" />
      </header>
      <body className="App-body">
        <div className="pre flexed-centered">
          <a>Projects    </a>
          <a href="/blog">Blog    </a>
          <a>About</a>
        </div>
        <Blog />
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
