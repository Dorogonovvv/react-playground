import logo from "./logo.svg";
import "./App.css";

import { UserCard } from "./UserCard";
import { UserProvider } from "./user-provider";
import { NXLogPasswordGenerator } from "./NXLogPasswordGenerator";

function App() {
  return (
    // <UserProvider>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NXLogPasswordGenerator/>
        {/* <UserCard /> */}
      </header>
    </div>
    // </UserProvider>
  );
}

export default App;
