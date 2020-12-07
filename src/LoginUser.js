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
          colors={[
            "#cc0e00",
            "#f0578a",
            "#9c27b0",
            "#5d30ac",
            "#273dbb",
            "#1495ff",
            "#8df2ff",
            "#00bcd4",
            "#009689",
            "#36c23a",
            "#93a021",
            "#426918",
            "#ffeb3b",
            "#ffc107",
            "#ff9800",
            "#795548",
            "#607d8b",
            "#000000",
          ]}
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
