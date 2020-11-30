import React from "react";
//Components
import Tweet from "./Tweet";

const Main = () => {
  return (
    <div className="main">
      <h1 className="home">Home</h1>
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
