import react from "react";
import "./styles/app.scss";
//Components
import Left from "./components/Left";
import Main from "./components/Main";
import Right from "./components/Right";

function App() {
  return (
    <div className="App">
      <Left />
      <Main />
      <Right />
    </div>
  );
}

export default App;
