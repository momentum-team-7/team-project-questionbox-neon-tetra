import './App.css';
import data from './questions2'
import Home from './Components/Home'
import QuestionFeed from './Components/QuestionFeed'
import DetailQuestion from './Components/DetailQuestion'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import useLocalStorageState from 'use-local-storage-state'


function App() {

  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <div className='top-nav-bar'>
            <h1>Question Box</h1>
            <div className='top-nav-buttons'>
              <button>Sign In</button>
              <button>Register</button>
              <button onClick>Ask it</button>

            </div>
          </div>
        </header>

        <div>
          <ul className='side-nav-bar'>
            <li>
              <button>Users</button>
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
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/question/:id'>
              <DetailQuestion />
            </Route>



          </Switch>

        </div>


      </div>


    </Router>
  );
}

export default App;
