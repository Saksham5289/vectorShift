import BaseNode from "./baseNode";

export const OutputNode = (props) => {
  return (
    <BaseNode
      {...props}
      type="Output"
      inputs={[{ id: `${props.id}-value` }]}
      outputs={[]}
    />
  );
};
