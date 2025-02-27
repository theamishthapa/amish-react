import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // let counter = 5;

  const addValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    if (counter >= 20) {
      setCounter(20);
    }
  };

  const removeValue = () => {
    setCounter(counter - 1);
    if (counter <= 0) {
      setCounter(0);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value:</button>
      <br />
      <button onClick={removeValue}>Remove value: </button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
