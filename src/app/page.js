import React from 'react';
import CorrectComponent from './components/CorrectComponent';
import IncorrectComponent from './components/IncorrectComponent';
import InteractiveComponents from './components/InteractiveComponents';
import './styles.css';
function App() {
  return (
    <div className="container">
      <h1>React Components Example</h1>
      <h2>Poprawny komponent:</h2>
      <CorrectComponent />
      <h2>Niepoprawny komponent:</h2>
      <IncorrectComponent />
      <h1>React Interactive Components</h1>
      <InteractiveComponents />
    </div>
  );
}

export default App;
