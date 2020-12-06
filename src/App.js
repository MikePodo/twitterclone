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
  const [initialColor, setInitialColor] = useState("");
  return (
    <div className="App">
      {loggedIn ? (
        <HomePage
          username={username}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          colorPicker={colorPicker}
          initialColor={initialColor}
        />
      ) : (
        <LoginUser
          colorPicker={colorPicker}
          setColorPicker={setColorPicker}
          username={username}
          setUsername={setUsername}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          initialColor={initialColor}
          setInitialColor={setInitialColor}
        />
      )}
    </div>
  );
}

export default App;
