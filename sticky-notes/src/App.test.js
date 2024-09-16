import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";

describe(App, () => {

    beforeEach(() => {
        render(<App />);
    });

    test("renders New Sticky Note", () => {

        const newStickyNoteButton = screen.getByText(/New Sticky Note/i);

        expect(newStickyNoteButton).toBeInTheDocument();
    });

    test("renders Add Sticky Note (+) button", () => {

        const addButton = screen.getByText("+");

        expect(addButton).toBeInTheDocument();
    });

    test("adds a new sticky note when + button is clicked", () => {

        const addButton = screen.getByText("+");
        fireEvent.click(addButton);
        const textArea = screen.getByRole("textbox");

        expect(textArea).toBeInTheDocument();
    });

    test("renders Save button on sticky note", () => {

        const addButton = screen.getByText("+");
        fireEvent.click(addButton);
        const saveButton = screen.getByText("Save");

        expect(saveButton).toBeInTheDocument();
    });

    test("Edit button is disabled when a new sticky note is added", () => {

        const addButton = screen.getByText("+");
        fireEvent.click(addButton);
        const editButton = screen.getByText("Edit");

        expect(editButton).toBeDisabled();
    });

    test("add text to sticky note", () => {

        const addButton = screen.getByText("+");
        fireEvent.click(addButton);
        const textarea = screen.getByRole("textbox");
        fireEvent.change(textarea, { target: { value: "New Note" } });
        const saveButton = screen.getByText("Save");
        fireEvent.click(saveButton);
    
        expect(textarea).toHaveValue("New Note");
    });
    
    test("Edit button is enabled after saving the note", () => {

        const addButton = screen.getByText("+");
        fireEvent.click(addButton);
        const textarea = screen.getByRole("textbox");
        fireEvent.change(textarea, { target: { value: "Test Note" } });
        const saveButton = screen.getByText("Save");
        fireEvent.click(saveButton);
        const editButton = screen.getByText("Edit");

        expect(editButton).not.toBeDisabled();
    });

    test("updates sticky note text", () => {

        const addButton = screen.getByText("+");
        fireEvent.click(addButton);
        const textarea = screen.getByRole("textbox");
        fireEvent.change(textarea, { target: { value: "New Update Note" } });
        const saveButton = screen.getByText("Save");
        fireEvent.click(saveButton);
        const editButton = screen.getByText("Edit");
        fireEvent.click(editButton);
        fireEvent.change(textarea, { target: { value: "Updating note.." } });
        fireEvent.click(saveButton);
    
        expect(textarea).toHaveValue("Updating note..");
    });

    test("renders Delete button on sticky note", () => {

        const addButton = screen.getByText("+");
        fireEvent.click(addButton);
        const deleteButton = screen.getByText("Delete");

        expect(deleteButton).toBeInTheDocument();
    });

    test("deletes a sticky note", () => {

        const addButton = screen.getByText("+");
        fireEvent.click(addButton);
        const deleteButton = screen.getByText("Delete");
        fireEvent.click(deleteButton);
    
        expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    });

    test("changes the color of a sticky note when a color option is clicked", async () => {

        const addButton = screen.getByText("+");
        fireEvent.click(addButton);
        const textarea = screen.getByRole("textbox");
        fireEvent.change(textarea, { target: { value: "Test Note" } });
        const stickyNote = screen.getByText("Test Note");
        const colorOption = screen.getByTestId("color-option-#FF8888");
        fireEvent.click(colorOption);

        expect(stickyNote).toHaveStyle("background-color: #FF8888");
      });
})