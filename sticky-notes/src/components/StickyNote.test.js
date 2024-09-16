import { render, screen, fireEvent } from "@testing-library/react";
import StickyNote from "./StickyNote";
import '@testing-library/jest-dom';

const mockNote = {
    id: 1,
    text: "Sample Note",
    color: "#FFFF88",
    isEditing: true,
};

describe("StickyNote Component", () => {
    test("renders sticky note with initial text", () => {

        render(<StickyNote note={mockNote} updateNote={jest.fn()} deleteNote={jest.fn()} updateNoteColor={jest.fn()} />);
        const textarea = screen.getByDisplayValue(/Sample Note/i);

        expect(textarea).toBeInTheDocument();
    });

    test("updates the sticky note text", () => {

        const mockUpdateNote = jest.fn();
        render(<StickyNote note={mockNote} updateNote={mockUpdateNote} deleteNote={jest.fn()} updateNoteColor={jest.fn()} />);
        const textarea = screen.getByRole("textbox");
        fireEvent.change(textarea, { target: { value: "Updated Note" } });
        const saveButton = screen.getByText("Save");
        fireEvent.click(saveButton);

        expect(mockUpdateNote).toHaveBeenCalledWith(mockNote.id, "Updated Note");
    });

    test("deletes the sticky note", () => {

        const mockDeleteNote = jest.fn();
        render(<StickyNote note={mockNote} updateNote={jest.fn()} deleteNote={mockDeleteNote} updateNoteColor={jest.fn()} />);
        const deleteButton = screen.getByText("Delete");
        fireEvent.click(deleteButton);

        expect(mockDeleteNote).toHaveBeenCalledWith(mockNote.id);
    });

    test("changes sticky note color", () => {
        
        const mockUpdateNoteColor = jest.fn();
        render(<StickyNote note={mockNote} updateNote={jest.fn()} deleteNote={jest.fn()} updateNoteColor={mockUpdateNoteColor} />);
        const colorOption = screen.getByTestId("color-option-#FF8888");
        fireEvent.click(colorOption);

        expect(mockUpdateNoteColor).toHaveBeenCalledWith(mockNote.id, "#FF8888");
    });
})