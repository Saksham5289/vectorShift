import { useState } from "react";
import BaseNode from "./baseNode";

export const NoteNode = (props) => {
  const [note, setNote] = useState("");

  return (
    <BaseNode {...props} type="Note Node" inputs={[]} outputs={[]}>
      <div>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your notes here..."
          rows="4"
          cols="30"
        />
      </div>
    </BaseNode>
  );
};
