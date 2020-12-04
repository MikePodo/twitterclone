import React from "react";

const Username = ({
  userPopup,
  setUserPopup,
  username,
  loggedIn,
  setLoggedIn,
}) => {
  const popupHandlerFocusFix = () => {
    setUserPopup(true);
  };
  const popupHandlerBlurFix = () => {
    setUserPopup(false);
  };

  const logoutHandler = () => {
    setLoggedIn(false);
  };

  return (
    <div
      tabIndex="3"
      className={`username-popup ${userPopup ? "active" : ""}`}
      onFocus={popupHandlerFocusFix}
      onBlur={popupHandlerBlurFix}
    >
      <div className="profile-pic-popup"></div>
      <div className="name-popup">
        <h2>{username}</h2>
        <h3>@{username.toLowerCase()}</h3>
      </div>
      <div className="add-account">
        <h3>Add an existing account</h3>
      </div>
      <div className="logout">
        <h3 onClick={logoutHandler}>Log out @{username.toLowerCase()}</h3>
      </div>
    </div>
  );
};

export default Username;
