import BaseNode from "./baseNode";

export const LLMNode = (props) => {
  return (
    <BaseNode
      {...props}
      type="LLM"
      inputs={[
        { id: `${props.id}-system`, position: "33%" },
        { id: `${props.id}-prompt`, position: "66%" },
      ]}
      outputs={[{ id: `${props.id}-response` }]}
    />
  );
};
