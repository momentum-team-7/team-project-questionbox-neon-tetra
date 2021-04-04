import './App.css';
import Home from './Components/Home';
import QuestionFeed from './Components/QuestionFeed';
import AskQuestion from './Components/AskQuestion';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DetailQuestion from './Components/DetailQuestion';
import Login from './Components/Login';
import Register from './Components/Register';
import useLocalStorageState from 'use-local-storage-state'
import UserFeed from './Components/UserFeed';



function App() {
  const [username, setUsername] = useLocalStorageState('notesUsername', '')
  const [token, setToken] = useLocalStorageState('notesToken', '')
  const [isCreating, setIsCreating] = useState(false)
      
  function setAuth(username, token) {
    setUsername(username)
    setToken(token)
}

function logOut() {
    setToken(null)
    setUsername(null)
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
              <Link to="/AskQuestion"
              title="Ask Question">
                Whatcha thinkin bout?
                </Link>

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
            
            <Route exact path='/askQuestion'>
              <AskQuestion
              setAuth={setAuth}
              isLoggedIn={isLoggedIn} 
              token={token}/>
            </Route>
            <Route path="/userfeed" >
              <UserFeed/>
            </Route>
            <Route path="/login" >
              <Login
              setAuth={setAuth}
              isLoggedIn={isLoggedIn}/>
            </Route>
            <Route exact path="/register">
              <Register />
            <Route path='/'>
              <Home />
            </Route>
            </Route>
            {/* <Route exact path='/question/:id'>
              <DetailQuestion />
            </Route> */}



          </Switch>

        </div>


      </div>


    </Router>
  );
}

export default App;
