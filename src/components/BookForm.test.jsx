import { describe, test, expect } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react';
import { afterEach } from 'vitest';
import { BookForm } from './BookForm';

describe("Given the BookForm component", () => {
    afterEach(() => {
        cleanup();
    });

    test("displays 'Saving...' and disables the button when isSaving is true", () => {
        render(<BookForm editingBook={null} isSaving={true} onCreateBook={() => { }} onUpdateBook={() => { }} />);

        const button = screen.getByRole("button", { name: "Saving..." });

        expect(button.disabled).toBe(true);
        expect(button.textContent).toBe("Saving...");
    });

    test("displays 'Add New Book' when not editing", () => {
        render(<BookForm editingBook={null} isSaving={false} onCreateBook={() => { }} onUpdateBook={() => { }} />);

        const headingForm = screen.getByText("Add New Book");
        expect(headingForm).toBeTruthy();
    });

    test("calls onCreateBook with default empty values when adding a book", () => {
        let createdBook = null;
        const onCreateBook = (book) => { createdBook = book; };

        render(<BookForm editingBook={null} isSaving={false} onCreateBook={onCreateBook} onUpdateBook={() => { }} />);

        const form = document.querySelector('form');
        form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

        expect(createdBook).toEqual({
            title: "",
            author: "",
            year: "2025",
            status: "pending",
        });
    });

    test("calls onUpdateBook with editingBook id and form data on submit", () => {
        let updatedBook = null;
        const editingBook = {
            id: "123",
            title: "Old Title",
            author: "Old Author",
            year: "2000",
            status: "read",
        };

        const onUpdateBook = (book) => { updatedBook = book; };
        render(<BookForm editingBook={editingBook} isSaving={false} onCreateBook={() => { }} onUpdateBook={onUpdateBook} />);

        screen.getByRole('button', { name: /update book/i }).click();

        expect(updatedBook).toEqual(editingBook);
    });
});
