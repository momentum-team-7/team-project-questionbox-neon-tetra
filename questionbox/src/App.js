import './App.css';
import data from './questions'
import QuestionFeed from './Components/QuestionFeed'
import React, { useState } from 'react'


function App() {
  const [questions, setQuestion] = useState(data)

  return (
    <div className="App">

      <header className="App-header">
        <div className='top-nav-bar'>
          <h1>Question Box</h1>
          <div className='top-nav-buttons'>
            <button>Sign In</button>
            <button>Register</button>

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
        <h1>Content</h1>
        {questions.map((question) => (
          <QuestionFeed
          question_title = {questions.question_title}
          created_at = {questions.created_at}
          question_text = {questions.question_text}
          id = {questions.id}
          />
        ))}
      </div>


      



    </div>
  );
}

export default App;
