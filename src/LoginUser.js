import React, { useRef, useState } from "react";
import { CirclePicker } from "react-color";

const LoginUser = ({
  loggedIn,
  setLoggedIn,
  username,
  setUsername,
  colorPicker,
  setColorPicker,
  initialColor,
  setInitialColor,
}) => {
  const [activateColorPicker, setActivateColorPicker] = useState(false);

  const loginInput = useRef();

  const loginHandler = () => {
    if (loginInput.current.value === "") {
      console.log("error");
    } else {
      setActivateColorPicker(true);
      setUsername(loginInput.current.value);
    }
  };

  const clickHandler = (e) => {
    if (e.charCode === 13) {
      loginHandler();
    }
  };

  const handleColorChange = (color) => {
    setColorPicker({
      background: color.hex,
    });
    setInitialColor(color.hex);
  };

  const setLoginTrue = () => {
    setLoggedIn(true);
  };

  return activateColorPicker ? (
    <div className="loginuser">
      <div className="color-container">
        <h1>Choose a color:</h1>
        <CirclePicker
          disableAlpha={true}
          color={colorPicker.background}
          onChange={handleColorChange}
          className="colorpicker"
        />
        <button onClick={setLoginTrue} className="go">
          Go
        </button>
      </div>
    </div>
  ) : (
    <div className="loginuser">
      <div className="loginbox">
        <h1>Enter Username:</h1>
        <input onKeyPress={clickHandler} ref={loginInput} type="textarea" />
        <button onClick={loginHandler} className="go">
          Next
        </button>
      </div>
    </div>
  );
};

export default LoginUser;
