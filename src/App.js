import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Temperature defaultCity="Cicago"/>
      <footer>
        <a href="https://github.com/MonikaSta/react-weather" target="_blank" rel="noopener noreferrer">Open-source code</a> by Monika Stasauskiene
      </footer>
      </div>
    </div>
  );
}

export default App;
