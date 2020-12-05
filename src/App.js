import React, { useState } from "react";
import "./styles/app.scss";
//Components
import HomePage from "./HomePage";
import LoginUser from "./LoginUser";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [colorPicker, setColorPicker] = useState({
    background: "#237480",
  });
  return (
    <div className="App">
      {loggedIn ? (
        <HomePage
          username={username}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          colorPicker={colorPicker}
        />
      ) : (
        <LoginUser
          colorPicker={colorPicker}
          setColorPicker={setColorPicker}
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
