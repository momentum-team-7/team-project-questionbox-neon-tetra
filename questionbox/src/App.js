import logo from './logo.svg';
import './App.css';

function App() {
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
      </div>


      



    </div>
  );
}

export default App;
