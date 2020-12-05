import React, { useRef } from "react";

const LoginUser = ({ loggedIn, setLoggedIn, username, setUsername }) => {
  const loginInput = useRef();

  const loginHandler = () => {
    if (loginInput.current.value === "") {
      console.log("error");
    } else {
      setLoggedIn(true);
      setUsername(loginInput.current.value);
    }
  };

  const clickHandler = (e) => {
    if (e.charCode === 13) {
      loginHandler();
    }
  };

  return (
    <div className="loginuser">
      <div className="loginbox">
        <h1>Enter Username:</h1>
        <input onKeyPress={clickHandler} ref={loginInput} type="textarea" />
        <button onClick={loginHandler} className="go">
          Go
        </button>
      </div>
    </div>
  );
};

export default LoginUser;
