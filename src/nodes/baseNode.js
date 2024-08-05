// baseNode.js
import React, { useState } from "react";
import { Handle, Position } from "reactflow";

const BaseNode = ({ id, data, type, inputs, outputs, children }) => {
  const [name, setName] = useState(
    data?.name || id.replace(`${type}-`, `${type}_`)
  );
  const [inputType, setInputType] = useState(data?.type || "Text");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleInputTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-md ">
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
      </div>
      <div className="space-y-2">
        <label className="block">
          <span className="text-gray-600 font-medium">Name:</span>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="mt-1 w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
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
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default BaseNode;
