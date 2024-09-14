import React, { useState } from "react";

const StickyNote = ({ note, updateNote, deleteNote, updateNoteColor }) => {
  const [text, setText] = useState(note.text);
  const [isEditing, setIsEditing] = useState(note.isEditing);

  const handleSave = () => {
    updateNote(note.id, text);
    setIsEditing(false);
  };

  const handleColorChange = (color) => {
    updateNoteColor(note.id, color);
  };

  const colors = ["#FFFF88", "#FF8888", "#88FF88", "#8888FF", "#FF88FF"];

  const colorItemStyle = (color) => ({
    backgroundColor: color,
    width: "20px",
    height: "20px",
    margin: "0 5px",
    cursor: "pointer",
    borderRadius: "50%",
    border: note.color === color ? "2px solid black" : "none",
    display: "inline-block",
  });

  return (
    <div className="stickynote" style={{ backgroundColor: note.color }}>
      <div className="colorpicker">
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => handleColorChange(color)}
            style={colorItemStyle(color)}
          />
        ))}
      </div>
      {isEditing ? (
        <textarea
          value={text}
          style={{ backgroundColor: note.color }}
          className="stickynote-textarea"
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <textarea
          value={text}
          style={{ backgroundColor: note.color }}
          className="stickynote-textarea"
        />
      )}

      <button className="button" onClick={handleSave} disabled={!isEditing}>
        Save
      </button>

      <button
        className="button"
        onClick={() => setIsEditing(true)}
        disabled={isEditing}
      >
        Edit
      </button>

      <button className="button" onClick={() => deleteNote(note.id)}>
        Delete
      </button>
    </div>
  );
};

export default StickyNote;
