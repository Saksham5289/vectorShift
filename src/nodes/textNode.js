import BaseNode from "./baseNode";

export const TextNode = (props) => {
  return (
    <BaseNode
      {...props}
      type="Text"
      inputs={[]}
      outputs={[]}
      showName="false"
      showType="false"
      addTextInput="true"
    />
  );
};
