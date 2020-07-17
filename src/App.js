import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const increment2 = () => setCount((previousCount) => previousCount + 2);
  const decrement2 = () => setCount((previousCount) => previousCount - 2);
  const reset = () => setCount(0);
  const twoTimes = () => setCount((timesCount) => timesCount * 2);

  const threeMultple = () =>
    setCount((previousCount) => {
      if (previousCount % 3 === 0) {
        return previousCount / 3;
      } else {
        return previousCount;
      }
    });

  return (
    <>
      <div>
        <div>count: {count}</div>
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+2</button>
        <button onClick={decrement2}>-2</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
      </div>
      <div>
        <button onClick={twoTimes}>*2</button>
      </div>
      <div>
        <button onClick={threeMultple}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
}

export default App;
