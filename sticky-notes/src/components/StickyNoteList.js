import StickyNote from "./StickyNote";

const StickyNoteList = ({ notes, updateNote, deleteNote, updateNoteColor }) => {
  return (
    <div className="stickynotes-list">
      {notes.map((note) => (
        <StickyNote
          note={note}
          updateNote={updateNote}
          deleteNote={deleteNote}
          updateNoteColor={updateNoteColor}
        />
      ))}
    </div>
  );
};

export default StickyNoteList;
