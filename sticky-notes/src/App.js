import React, { useState } from "react";
import "./App.css";
import StickyNoteList from "./components/StickyNoteList";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      text: "",
      isEditing: true,
    };
    setNotes([...notes, newNote]);
  };

  const updateNote = (id, text) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, text, isEditing: false } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <span> New Sticky Note </span>

      <button onClick={addNote}>+</button>
      {/*<ColorPicker addNote={addNote}/>*/}
      <StickyNoteList
        notes={notes}
        updateNote={updateNote}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
