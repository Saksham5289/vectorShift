import BaseNode from "./baseNode";

export const TextNode = (props) => {
  return (
    <BaseNode
      {...props}
      type="Text"
      inputs={[]}
      outputs={[{ id: `${props.id}-output` }]}
    />
  );
};
