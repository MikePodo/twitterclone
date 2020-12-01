import React, { useState, useRef } from "react";
import "./styles/app.scss";
//Components
import Left from "./components/Left";
import Main from "./components/Main";
import Right from "./components/Right";

function App() {
  const tweetInput = useRef();
  const tweetButton = useRef();
  const [leftStatus, setLeftStatus] = useState(false);
  const [rightStatus, setRightStatus] = useState(false);
  const [tweetList, setTweetList] = useState([]);
  return (
    <div className="App">
      <Left
        tweetInput={tweetInput}
        leftStatus={leftStatus}
        setLeftStatus={setLeftStatus}
      />
      <Main
        tweetInput={tweetInput}
        tweetButton={tweetButton}
        leftStatus={leftStatus}
        setLeftStatus={setLeftStatus}
        rightStatus={rightStatus}
        setRightStatus={setRightStatus}
        tweetList={tweetList}
        setTweetList={setTweetList}
      />
      <Right rightStatus={rightStatus} setRightStatus={setRightStatus} />
    </div>
  );
}

export default App;
