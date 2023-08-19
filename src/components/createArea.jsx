import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExapnded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const inputName = event.target.name;
    const newVal = event.target.value;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [inputName]: newVal
      };
    });
  }
  function Expanded() {
    setExapnded((prevValue) => {
      return !prevValue;
    });
  }
  function storeNotes(event) {
    props.onAdding(note);
    setNote({
      title: "",
      content: ""
    });
    //To prevent refreshing (default behaviour)
    event.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            type="text"
            onChange={handleChange}
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          name="content"
          type="text"
          rows={isExpanded ? "3" : "1"}
          onChange={handleChange}
          onClick={Expanded}
          placeholder="Take a note..."
          value={note.content}
        />
        <Zoom appear={true} in={isExpanded ? true : false}>
          <Fab size="medium" onClick={storeNotes}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
