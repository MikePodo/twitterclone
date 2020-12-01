import React from "react";
//Fontawesome

import { FaTwitter } from "react-icons/fa";
const Left = ({ leftStatus, setLeftStatus }) => {
  return (
    <div
      className={`${leftStatus ? "left-container-active" : "left-container"}`}
    >
      <div className="left">
        <div className="nav">
          <div>
            <FaTwitter className="logo" />
          </div>
          <div
            onClick={() => setLeftStatus(!leftStatus)}
            className={`${leftStatus ? "x" : ""}`}
          >
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
          <div className="option">
            <h2>Home</h2>
          </div>
          <div className="option">
            <h2>Explore</h2>
          </div>
          <div className="option">
            <h2>Notifications</h2>
          </div>
          <div className="option">
            <h2>Messages</h2>
          </div>
          <div className="option">
            <h2>Bookmarks</h2>
          </div>
          <div className="option">
            <h2>Lists</h2>
          </div>
          <div className="option">
            <h2>Profile</h2>
          </div>
          <div className="option">
            <h2>More</h2>
          </div>
          <button className="twitter-button">Tweet</button>
          <div className="profile">
            <div className="profile-pic"></div>
            <div className="username">
              <h2>Username</h2>
              <h3>@username</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
