import { useState, useEffect } from "react";
import BaseNode from "./baseNode";

export const MathOperationNode = (props) => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(0);

  useEffect(() => {
    let res = 0;
    switch (operation) {
      case "add":
        res = input1 + input2;
        break;
      case "subtract":
        res = input1 - input2;
        break;
      case "multiply":
        res = input1 * input2;
        break;
      case "divide":
        res = input1 / input2;
        break;
      default:
        res = 0;
    }
    setResult(res);
  }, [input1, input2, operation]);

  return (
    <BaseNode
      {...props}
      type="Math Operation"
      inputs={[
        { id: `${props.id}-input1`, position: "25%" },
        { id: `${props.id}-input2`, position: "75%" },
      ]}
      outputs={[{ id: `${props.id}-result`, position: "50%" }]}
    >
      <div>
        <input
          type="number"
          value={input1}
          onChange={(e) => setInput1(Number(e.target.value))}
        />
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
        <input
          type="number"
          value={input2}
          onChange={(e) => setInput2(Number(e.target.value))}
        />
        <div>Result: {result}</div>
      </div>
    </BaseNode>
  );
};
