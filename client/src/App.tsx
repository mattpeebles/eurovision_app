import React, { useState, useCallback, useEffect } from 'react';
// import logo from './logo.svg';
import Header from './components/header/Header';
import './App.css';
import Account from './pages/account/Account'
import NavBar from './components/nav_bar/NavBar';
import { Pages } from './enums/Pages';
import Login from './pages/login/Login';
import Stats from './pages/stats/Stats';
import SongsPage from './pages/songs/Songs';

function App()
{
  const [currentPage, setCurrentPage] = useState(Pages.Login)
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
      setCurrentPage(currentUser ? Pages.Songs : Pages.Login);
  }, [currentUser])

  const page = useCallback(() =>
  {
    switch (currentPage)
    {
      case Pages.Songs:
        return <SongsPage userID={currentUser}/>;
      case Pages.Account:
        return <Account userID={currentUser} logoutUser={() => setCurrentUser('')}/>
        case Pages.Stats:
        return <Stats />
        case Pages.Login:
          return <Login setLoggedIn={(userID: string) => setCurrentUser(userID)}/>
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

      {currentUser != '' && <NavBar onClick={setCurrentPage} currentPage={currentPage}/>}
    </div>
  );
}

export default App;
