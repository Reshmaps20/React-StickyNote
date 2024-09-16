import { render, screen } from "@testing-library/react";
import StickyNoteList from "./StickyNoteList";
import '@testing-library/jest-dom';

const mockNotes = [
    { id: 1, text: "Note 1", color: "#FFFF88", isEditing: false },
    { id: 2, text: "Note 2", color: "#FF8888", isEditing: true },
  ];
  
  describe("StickyNoteList Component", () => {
    test("renders the list of sticky notes", () => {

      render(<StickyNoteList notes={mockNotes} updateNote={jest.fn()} deleteNote={jest.fn()} updateNoteColor={jest.fn()} />);
      const note1 = screen.getByDisplayValue(/Note 1/i);
      const note2 = screen.getByDisplayValue(/Note 2/i);
      
      expect(note1).toBeInTheDocument();
      expect(note2).toBeInTheDocument();
    });
  });