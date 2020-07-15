import React from 'react';
import logo from './logo.svg';
import tool from './crossedtools.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={tool} className="App-logo" alt="logo" />
        <p className="pre">
          Build    Grow    Make
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
