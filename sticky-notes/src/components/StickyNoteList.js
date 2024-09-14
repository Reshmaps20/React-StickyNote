import StickyNote from "./StickyNote";

const StickyNoteList = ({ notes, updateNote, deleteNote }) => {
  return (
    <div className="stickynotes-list">
      {notes.map((note) => (
        <StickyNote
          note={note}
          updateNote={updateNote}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};

export default StickyNoteList;
