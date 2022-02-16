import React from 'react';
import './App.css';
import Counter from './Counter';
import Counterone from './Counterone';
import Countertwo from './Countertwo';

// Sharing code between react component using a props whose value is a function.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter render={(count, incrementValue) => (<Counterone count={count} incrementValue={incrementValue} />)} />
        <Counter render={(count, incrementValue) => (<Countertwo count={count} incrementValue={incrementValue} />)} />
      </header>
    </div>
  );
}

export default App;
