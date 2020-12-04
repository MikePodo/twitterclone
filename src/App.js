import React, { useState } from "react";
import "./styles/app.scss";
//Components
import HomePage from "./HomePage";
import LoginUser from "./LoginUser";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      {loggedIn ? (
        <HomePage
          username={username}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      ) : (
        <LoginUser
          username={username}
          setUsername={setUsername}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      )}
    </div>
  );
}

export default App;
