import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import Header from './components/header/Header';
import './App.css';
import ParticipantList from './components/participant_list/ParticipantList';
import NavBar from './components/nav_bar/NavBar';
import { Pages } from './enums/Pages';

function App()
{
  const [currentPage, setCurrentPage] = useState(Pages.Login)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const page = useCallback(() =>
  {
    switch (currentPage)
    {
      case Pages.Songs:
        return <ParticipantList />;
      case Pages.Account:
        return <div>Account</div>
        case Pages.Stats:
        return <div>Stats</div>
        case Pages.Login:
          return <div>Login</div>
        default:
        return <div>Unknown</div>
    }
  }, [currentPage]);

  return (
    <div className="App">
      <Header />
      <div className="App-Body">
        {page()}
      </div>
      <NavBar onClick={setCurrentPage} currentPage={currentPage}/>
    </div>
  );
}

export default App;
