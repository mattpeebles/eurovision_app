import React, { useState, useCallback, useEffect } from 'react';
// import logo from './logo.svg';
import Header from './components/header/Header';
import './App.css';
import SongList from './components/song_list/SongList';
import Account from './pages/account/Account'
import NavBar from './components/nav_bar/NavBar';
import { Pages } from './enums/Pages';
import Login from './pages/login/Login';
import Stats from './pages/stats/Stats';

function App()
{
  const [currentPage, setCurrentPage] = useState(Pages.Login)
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
      setCurrentPage(isLoggedIn ? Pages.Songs : Pages.Login);
  }, [isLoggedIn])

  const page = useCallback(() =>
  {
    switch (currentPage)
    {
      case Pages.Songs:
        return <SongList />;
      case Pages.Account:
        return <Account name={'Matt'} setIsLoggedIn={setIsLoggedIn}/>
        case Pages.Stats:
        return <Stats />
        case Pages.Login:
          return <Login setLoggedIn={() => setIsLoggedIn(true)}/>
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

      {isLoggedIn && <NavBar onClick={setCurrentPage} currentPage={currentPage}/>}
    </div>
  );
}

export default App;