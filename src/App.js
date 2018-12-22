import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000)
  // const loading = true

  if (loading) return null;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
