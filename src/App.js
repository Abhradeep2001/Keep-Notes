import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import Note from "./components/Note";
import CreateArea from "./components/createArea";

function App() {
  const [noteItems, setNoteItems] = useState([]);

  function addNote(note) {
    setNoteItems((prevNote) => {
      return [...prevNote, note];
    });
  }

  function deleteNote(id) {
    setNoteItems((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdding={addNote} />
      {noteItems.map((eachNoteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={eachNoteItem.title}
            content={eachNoteItem.content}
            onDeleting={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
