import React, { useState, useRef } from "react";
//Components
import Left from "./components/Left";
import Main from "./components/Main";
import Right from "./components/Right";
import Username from "./components/Username";

const HomePage = ({ username }) => {
  const tweetInput = useRef();
  const tweetButton = useRef();
  const [leftStatus, setLeftStatus] = useState(false);
  const [rightStatus, setRightStatus] = useState(false);
  const [tweetList, setTweetList] = useState([]);
  const [userPopup, setUserPopup] = useState(false);

  return (
    <div className="homepage">
      <Username
        username={username}
        userPopup={userPopup}
        setUserPopup={setUserPopup}
      />
      <Left
        username={username}
        tweetInput={tweetInput}
        leftStatus={leftStatus}
        setLeftStatus={setLeftStatus}
        userPopup={userPopup}
        setUserPopup={setUserPopup}
      />
      <Main
        username={username}
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
};

export default HomePage;
