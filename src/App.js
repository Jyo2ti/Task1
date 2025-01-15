import React from 'react';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="React Developer" />
      </header>
    </div>
  );
}

export default App;
