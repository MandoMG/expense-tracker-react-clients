import React from 'react';
import logo from './logo.svg';
import './App.css';
import useTestHook from "mandomg-expensetracker-common/src/hooks/useTestHook";

function App() {
  const { memoWelcomeString } = useTestHook();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{ memoWelcomeString }</p>
      </header>
    </div>
  );
}

export default App;
