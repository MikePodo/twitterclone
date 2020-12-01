import React, { useRef } from "react";
//Components
import Tweet from "./Tweet";
//Icons
import { HiOutlinePhotograph } from "react-icons/hi";
import { RiFileGifLine } from "react-icons/ri";
import { BiPoll, BiSmile } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
const Main = ({
  tweetList,
  setTweetList,
  leftStatus,
  setLeftStatus,
  rightStatus,
  setRightStatus,
  tweetInput,
  tweetButton,
}) => {
  const tweetHandler = () => {
    setTweetList([tweetInput.current.value, ...tweetList]);
    tweetInput.current.value = "";
  };

  return (
    <div className={`${leftStatus || rightStatus ? "main-disabled" : "main"}`}>
      <div className="header-nav">
        <div onClick={() => setLeftStatus(!leftStatus)} className="nav-divs">
          <div className="nav-div"></div>
          <div className="nav-div"></div>
          <div className="nav-div third"></div>
        </div>
        <h1>Home</h1>
        <div
          onClick={() => setRightStatus(!rightStatus)}
          className="open-search"
        >
          Search
        </div>
      </div>
      <div className="whats-happening">
        <div className="whats-happening-top">
          <div className="profile-pic-main"></div>
          <input
            placeholder="What's happening?"
            className="happening-textarea"
            type="textarea"
            ref={tweetInput}
          ></input>
        </div>
        <div className="whats-happening-bottom">
          <div className="happening-icons">
            <HiOutlinePhotograph className="happening-icon" />
            <RiFileGifLine className="happening-icon" />
            <BiPoll className="happening-icon" />
            <BiSmile className="happening-icon" />
            <AiOutlineCalendar className="happening-icon" />
          </div>
          <button ref={tweetButton} onClick={tweetHandler}>
            Tweet
          </button>
        </div>
      </div>
      <div className="gap"></div>
      {tweetList.map((tweet) => (
        <Tweet tweet={tweet} key={Math.random() * 1000} />
      ))}
    </div>
  );
};

export default Main;
