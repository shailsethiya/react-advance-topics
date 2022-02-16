import React from 'react';
import './App.css';
import ComponentOne from './ComponentOne';

// Sharing code between react component using a props whose value is a function.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComponentOne render={() => 'shailendra'} />
      </header>
    </div>
  );
}

export default App;
