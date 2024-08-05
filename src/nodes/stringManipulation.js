import { useState, useEffect } from "react";
import BaseNode from "./baseNode";

export const StringManipulationNode = (props) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    setResult((input1 + input2).toUpperCase());
  }, [input1, input2]);

  return (
    <BaseNode
      {...props}
      type="String Manipulation Node"
      inputs={[
        { id: `${props.id}-input1`, position: "25%" },
        { id: `${props.id}-input2`, position: "75%" },
      ]}
      outputs={[{ id: `${props.id}-result`, position: "50%" }]}
    >
      <div>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Input 1"
        />
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Input 2"
        />
        <div>Result: {result}</div>
      </div>
    </BaseNode>
  );
};
