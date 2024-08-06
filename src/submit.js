import { useStore } from "./store";
import axios from "axios";

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8000/check_dag", {
        nodes,
        edges,
      });

      const { num_nodes, num_edges, is_dag } = response.data;

      alert(
        `Number of nodes: ${num_nodes}\nNumber of edges: ${num_edges}\nIs DAG: ${is_dag}`
      );
    } catch (error) {
      console.error("Error submitting the graph:", error);
      alert("There was an error checking the graph.");
    }
  };

  return (
    <div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white font-bold rounded-lg shadow-lg flex items-center justify-center cursor-pointer"
      style={{ width: "100px", height: "50px" }}
      onClick={handleSubmit}
    >
      <button
        type="button"
        className="bg-transparent border-none text-white cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
};
