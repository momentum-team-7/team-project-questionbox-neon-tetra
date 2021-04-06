import './App.css';
import data from './questions2'
import Home from './Components/Home'
import QuestionFeed from './Components/QuestionFeed'
import DetailQuestion from './Components/DetailQuestion'
import React, { useState } from 'react'
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
            <h1>Question Box</h1>
            <div className='top-nav-buttons'>
              <button>Sign In</button>
              <button>Register</button>
              <Link to="/AskQuestion" type="button" className="btn btn-primary">Ask it</Link>

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
            <li>
              <button>Questions</button>
            </li>
            <li>
              <button>My Profile</button>
            </li>
          </ul>
        </div>

        <div className='content-div'>
          <Switch>
            <Route path='/owner/:id'>
              <DetailUser />
            </Route>
            <Route path="/userfeed" >
              <UserFeed/>
            </Route>
            <Route path="/AskQuestion" >
              <AskQuestion isLoggedIn={isLoggedIn} token={token}/>
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/question/:id'>
              <DetailQuestion token={token}/>
            </Route>
            <Route>
              <Login setAuth={setAuth} isLoggedIn={isLoggedIn} token={token} />
            </Route>
          </Switch>

        </div>


      </div>


    </Router>
  );
}

export default App;
