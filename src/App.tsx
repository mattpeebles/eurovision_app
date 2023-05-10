import React from 'react';
import logo from './logo.svg';
import './App.css';
import Song from './components/Song';
import Participants from './data/participants/2023';

function App() {
  return (
    <div className="App">
      {Participants.map(participant => <Song participant={participant} />)}
    </div>
  );
}

export default App;
