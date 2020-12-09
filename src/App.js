import React, { useState } from "react";
import "./styles/app.scss";
//Components
import HomePage from "./HomePage";

import LoginUser from "./LoginUser";
//Animations
import { motion, AnimatePresence } from "framer-motion";
import { slideRight } from "./animation";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [colorPicker, setColorPicker] = useState({
    background: "#237480",
  });
  const [initialColor, setInitialColor] = useState("");
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        {loggedIn ? (
          <HomePage
            username={username}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            colorPicker={colorPicker}
            initialColor={initialColor}
          />
        ) : (
          <motion.div
            variants={slideRight}
            initial="hide"
            animate="show"
            exit="exit"
            key="page2"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
