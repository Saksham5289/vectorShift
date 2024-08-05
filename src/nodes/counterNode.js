import { useState } from "react";
import BaseNode from "./baseNode";

export const CounterNode = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <BaseNode {...props} type="Counter Node" inputs={[]} outputs={[]}>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </BaseNode>
  );
};
