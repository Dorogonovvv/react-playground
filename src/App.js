import logo from "./logo.svg";
import "./App.css";

import { UserCard } from "./UserCard";
import { UserProvider } from "./user-provider";

function App() {

  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <UserCard />
        </header>
      </div>
    </UserProvider>
  );
}

export default App;
