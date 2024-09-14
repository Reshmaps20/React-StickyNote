import React, { useState } from "react";

const StickyNote = ({ note, updateNote, deleteNote }) => {
    const [text, setText] = useState(note.text);
    const [isEditing, setIsEditing] = useState(note.isEditing);

    const handleSave = () => {
        updateNote(note.id, text);
        setIsEditing(false);
    };

    return (
        <div className="stickynote">
            {isEditing ? (
                <textarea
                    value={text}
                    className="stickynote-textarea"
                    onChange={(e) => setText(e.target.value)}
                />
            ) : (
                <textarea value={text} className="stickynote-textarea" />
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
