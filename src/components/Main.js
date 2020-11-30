import React from "react";
//Components
import Tweet from "./Tweet";

const Main = ({ leftStatus, setLeftStatus, rightStatus, setRightStatus }) => {
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
          ></input>
        </div>
        <div className="whats-happening-bottom">
          <div className="happening-icons">
            <div className="happening-icon"></div>
            <div className="happening-icon"></div>
            <div className="happening-icon"></div>
            <div className="happening-icon"></div>
            <div className="happening-icon"></div>
          </div>
          <button>Tweet</button>
        </div>
      </div>
      <div className="gap"></div>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
};

export default Main;
