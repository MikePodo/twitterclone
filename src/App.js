import React, { useState } from "react";
import "./styles/app.scss";
//Components
import Left from "./components/Left";
import Main from "./components/Main";
import Right from "./components/Right";

function App() {
  const [leftStatus, setLeftStatus] = useState(false);
  const [rightStatus, setRightStatus] = useState(false);
  return (
    <div className="App">
      <Left leftStatus={leftStatus} setLeftStatus={setLeftStatus} />
      <Main
        leftStatus={leftStatus}
        setLeftStatus={setLeftStatus}
        rightStatus={rightStatus}
        setRightStatus={setRightStatus}
      />
      <Right rightStatus={rightStatus} setRightStatus={setRightStatus} />
    </div>
  );
}

export default App;
