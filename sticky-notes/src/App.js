import React, { useState } from "react";
import "./App.css";
import StickyNoteList from "./components/StickyNoteList";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      text: "",
      color: '#fef68a',
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

  const updateNoteColor = (id, color) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, color } : note
    );
    setNotes(updatedNotes);
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
        updateNoteColor={updateNoteColor}
      />
    </div>
  );
};

export default App;
