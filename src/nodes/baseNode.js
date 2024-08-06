import React, { useState, useEffect, useRef, useMemo } from "react";
import { Handle, Position } from "reactflow";

const BaseNode = ({
  id,
  data,
  type,
  inputs,
  outputs,
  children,
  showName = "true",
  showType = "true",
  addTextInput = "false",
}) => {
  const [name, setName] = useState(
    data?.name || id.replace(`${type}-`, `${type}_`)
  );
  const [inputType, setInputType] = useState(data?.type || "Text");
  const [currText, setCurrText] = useState(data?.text || "");
  const [variables, setVariables] = useState([]);
  const textRef = useRef(null);
  const nodeRef = useRef(null); // Ref to the node container

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleInputTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handleTextChange = (e) => {
    const text = e.target.value;
    setCurrText(text);
    updateVariables(text);
  };

  const updateVariables = (text) => {
    const varRegex = /\{\{\s*(\w+)\s*\}\}/g;
    const matches = [...text.matchAll(varRegex)];
    const newVariables = matches.map((match) => match[1]);
    setVariables(newVariables.map((variable, index) => ({ variable, index })));
  };

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.height = "auto";
      textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    }
  }, [currText]);

  const handleStyles = useMemo(() => {
    const nodeHeight = nodeRef.current?.offsetHeight || 0;
    const handleHeight = 30; // Adjust handle height if needed
    return variables.map((_, index) => ({
      top: `${(nodeHeight / (variables.length + 1)) * (index + 1)}px`, // Distribute handles evenly
      right: "0px", // Adjust if needed
    }));
  }, [variables]);

  return (
    <div
      className="p-4 bg-white border border-gray-300 rounded-lg shadow-md"
      ref={nodeRef}
    >
      <div className="flex items-center mb-2">
        {inputs.map((input) => (
          <Handle
            key={input.id}
            type="target"
            position={Position.Left}
            id={input.id}
            style={{ top: input.position }}
            className="bg-gray-800"
          />
        ))}
        <div className="flex-grow text-center font-semibold text-gray-800">
          {type}
        </div>
        {outputs.map((output) => (
          <Handle
            key={output.id}
            type="source"
            position={Position.Right}
            id={output.id}
            className="bg-gray-800"
          />
        ))}
        {variables.map((variable, index) => (
          <Handle
            key={`var-${variable}-${id}`} // Unique ID for each handle
            type="source"
            position={Position.Right}
            id={`var-${variable}-${id}`} // Unique ID for each handle
            style={handleStyles[index]} // Use memoized styles
            className="bg-blue-500"
          />
        ))}
      </div>
      <div className="space-y-2">
        {showName === "true" && (
          <label className="block">
            <span className="text-gray-600 font-medium">Name:</span>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="mt-1 w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        )}

        {showType === "true" && (
          <label className="block">
            <span className="text-gray-600 font-medium">Type:</span>
            <select
              value={inputType}
              onChange={handleInputTypeChange}
              className="mt-1 w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        )}

        {addTextInput === "true" && (
          <div>
            <label>
              Text:
              <textarea
                ref={textRef}
                value={currText}
                onChange={handleTextChange}
                className="mt-1 w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ resize: "none", overflow: "hidden" }}
              />
            </label>
          </div>
        )}
      </div>

      <div className="mt-4">{children}</div>
    </div>
  );
};

export default BaseNode;
