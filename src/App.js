import React, {Component} from 'react';
import './App.css';
import PersonCard from './components/PersonCard.jsx';

function App() {
  return (
    <div className="App">
        <PersonCard lastName={"Doe"} firstName={"Jane"} age={45} hairColor={"Black"}></PersonCard>
        <PersonCard lastName={"Smith"} firstName={"John"} age={88} hairColor={"Brown"}></PersonCard>
        
    </div>
  );
}

export default App;
