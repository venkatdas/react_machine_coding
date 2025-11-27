import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
    if(count<0) disable
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <div className="showDigit">{count}</div>
      <button onClick={increment}>Increment</button>
      <button disabled={count === 0} onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
