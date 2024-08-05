export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="cursor-grab flex-shrink-0 w-60 h-32 flex items-center justify-center rounded-lg bg-gray-100 border border-gray-300 shadow-md transition-transform duration-150 ease-in-out hover:bg-gray-200 hover:shadow-lg"
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className="text-gray-800 text-lg font-semibold">{label}</span>
    </div>
  );
};
