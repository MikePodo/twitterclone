import React, { useRef } from "react";

//Icons
import { FaTwitter } from "react-icons/fa";
import { RiHome7Fill, RiFileList2Line } from "react-icons/ri";
import { BiHash, BiBell } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { CgProfile, CgMoreO } from "react-icons/cg";
const Left = ({
  leftStatus,
  setLeftStatus,
  tweetInput,
  profile,
  setUserPopup,
  userPopup,
  username,
  colorPicker,
}) => {
  const leftContainer = useRef();

  const tweetFocus = () => {
    setLeftStatus(false);
    setTimeout(() => {
      tweetInput.current.focus();
    }, 10);
  };

  const popupHandler = () => {
    setUserPopup(!userPopup);
  };

  const closePopupHandler = () => {
    setUserPopup(!userPopup);
  };

  return (
    <div
      ref={leftContainer}
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
            <RiHome7Fill className="option-icon" />
            <h2>Home</h2>
          </div>
          <div className="option">
            <BiHash className="option-icon" />
            <h2>Explore</h2>
          </div>
          <div className="option">
            <BiBell className="option-icon" />
            <h2>Notifications</h2>
          </div>
          <div className="option">
            <FiMail className="option-icon" />
            <h2>Messages</h2>
          </div>
          <div className="option">
            <BsBookmark className="option-icon" />
            <h2>Bookmarks</h2>
          </div>
          <div className="option">
            <RiFileList2Line className="option-icon" />
            <h2>Lists</h2>
          </div>
          <div className="option">
            <CgProfile className="option-icon" />
            <h2>Profile</h2>
          </div>
          <div className="option">
            <CgMoreO className="option-icon" />
            <h2>More</h2>
          </div>
          <button onClick={tweetFocus} className="twitter-button">
            Tweet
          </button>

          <div
            tabIndex="2"
            className="profile"
            onClick={popupHandler}
            onBlur={closePopupHandler}
          >
            <div style={colorPicker} className="profile-pic"></div>
            <div className="username">
              <h2>{username}</h2>
              <h3>@{username.toLowerCase()}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
