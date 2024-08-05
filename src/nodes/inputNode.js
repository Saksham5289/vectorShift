import BaseNode from "./baseNode";

export const InputNode = (props) => {
  return (
    <BaseNode
      {...props}
      type="Input"
      inputs={[{ id: `${props.id}-value`, position: "50%" }]}
      outputs={[]}
    >
      <div className="space-y-2">
        <label className="block">
          <span className="text-gray-600">Name:</span>
          <input
            type="text"
            value={props.data.inputName}
            onChange={(e) =>
              props.onChange({ ...props.data, inputName: e.target.value })
            }
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </label>
        <label className="block">
          <span className="text-gray-600">Type:</span>
          <select
            value={props.data.inputType}
            onChange={(e) =>
              props.onChange({ ...props.data, inputType: e.target.value })
            }
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
