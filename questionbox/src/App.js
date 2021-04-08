import './App.css';
import Home from './Components/Home'
import DetailQuestion from './Components/DetailQuestion'
import React from 'react'
import useLocalStorageState from 'use-local-storage-state'
import UserFeed from './Components/UserFeed'
import DetailUser from './Components/DetailUser'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AskQuestion from './Components/AskQuestion';
import Login from './Components/Login';
import Registration from './Components/Registration';



function App() {
  const [username, setUsername] = useLocalStorageState('username', '')
  const [token, setToken] = useLocalStorageState('token', '')

  function setAuth(username, token) {
    setUsername(username)
    setToken(token)
  }

  function logOut() {
    setUsername(null)
    setToken(null)
  }

  const isLoggedIn = username && token 


  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <div className='top-nav-bar'>
            <div className="logo"><h1>Question Box</h1></div>
            <div className='top-nav-buttons'>
              {isLoggedIn ? (
                <>
                  <Link to="/logOut" onClick={logOut} type="button" className="btn btn-primary">Log Out</Link>
                </>  
              ) : (
                <>
                  <Link to="/Registeration" type="button" className="btn btn-primary">Register</Link>
                  <Link to="/Login" type="button" className="btn btn-primary">Log In</Link>
                </>
              )}
            </div>
          </div>
        </header>

        <div>
          <ul className='side-nav-bar'>
            <li>
              <Link to="/" type="button" className="btn btn-primary">Home</Link>
            </li>
            <li>
            <Link to="/userfeed" type="button" className="btn btn-primary">Users</Link>
            </li>
              {isLoggedIn? (
                  <li>
                  <Link to="/AskQuestion" type="button" className="btn btn-primary">Ask it</Link>
                  </li>
              ) : (
                <></>
              )}
          </ul>
        </div>

        <div className='content-div'>
          <Switch>
            <Route path='/owner/:id'>
              <DetailUser token={token}/>
            </Route>
            <Route path="/userfeed" >
              <UserFeed token={token}/>
            </Route>
            <Route path="/AskQuestion" >
              <AskQuestion isLoggedIn={isLoggedIn} token={token}/>
            </Route>
            <Route exact path='/'>
              <Home token={token}/>
            </Route>
            <Route path='/question/:id'>
              <DetailQuestion token={token}/>
            </Route>
            <Route path='/login'>
              <Login setAuth={setAuth} isLoggedIn={isLoggedIn} token={token} />
            </Route>
            <Route path='/registration'>
              <Registration setAuth={setAuth} isLoggedIn={isLoggedIn} />
            </Route>
          </Switch>

        </div>


      </div>


    </Router>
  );
}

export default App;
