import { useState } from "react";
import BaseNode from "./baseNode";

export const RandomNumberNode = (props) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [result, setResult] = useState(0);

  const generateRandomNumber = () => {
    setResult(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  return (
    <BaseNode
      {...props}
      type="Random Number Node"
      inputs={[]}
      outputs={[{ id: `${props.id}-result`, position: "50%" }]}
    >
      <div>
        <label>
          Min:
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
          />
        </label>
        <label>
          Max:
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
          />
        </label>
        <button onClick={generateRandomNumber}>Generate</button>
        <div>Result: {result}</div>
      </div>
    </BaseNode>
  );
};
