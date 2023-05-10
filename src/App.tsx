import React from 'react';
import logo from './logo.svg';
import './App.css';
import Song from './components/Song';
import Participants from './data/participants/2023';

function App() {
  const participant = Participants[0];
  return (
    <div className="App">
      <Song participant={participant} />
    </div>
  );
}

export default App;
