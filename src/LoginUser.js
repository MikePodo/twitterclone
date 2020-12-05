import React, { useRef } from "react";
import { SketchPicker } from "react-color";

const LoginUser = ({
  loggedIn,
  setLoggedIn,
  username,
  setUsername,
  colorPicker,
  setColorPicker,
}) => {
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

  const handleColorChange = (color) => {
    setColorPicker({
      background: color.hex,
    });
    console.log(colorPicker);
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
      <SketchPicker
        disableAlpha={true}
        color={colorPicker.background}
        onChange={handleColorChange}
        className="colorpicker"
      />
    </div>
  );
};

export default LoginUser;
