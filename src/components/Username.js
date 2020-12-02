import React from "react";

const Username = ({ userPopup }) => {
  return (
    <div className={`username-popup ${userPopup ? "active" : ""}`}>
      <div className="profile-pic-popup"></div>
      <div className="name-popup">
        <h2>Username</h2>
        <h3>@username</h3>
      </div>
      <div className="add-account">
        <h3>Add an existing account</h3>
      </div>
      <div className="logout">
        <h3>Log out @username</h3>
      </div>
    </div>
  );
};

export default Username;
