import { describe, test, expect } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react';
import { afterEach } from 'vitest';
import { BooksList } from './BooksList';

describe("Given the BookCard component", () => {
    afterEach(() => {
        cleanup();
    });

    test('displays loading message when loading is true', () => {
        render(<BooksList bookList={[]} onDeleteBook={() => { }} onEditBook={() => { }} loading={true} saving={false} />);

        expect(screen.getByText('Loading books...')).toBeTruthy();
    });

    test('renders nothing when saving is true', () => {
        const { container } = render(<BooksList bookList={[{ id: 1, title: 'Book 1' }]} onDeleteBook={() => { }} onEditBook={() => { }} loading={false} saving={true} />);

        expect(container.childElementCount).toBe(0);
    });

    test('shows empty message when book list is empty and not loading', () => {
        render(<BooksList bookList={[]} onDeleteBook={() => { }} onEditBook={() => { }} loading={false} saving={false} />);

        expect(screen.getByText('Empty books list')).toBeTruthy();
    });

    test('renders books when bookList is not empty', () => {
        const mockBookList = [
            { id: 1, title: 'Book One', author: 'Author One', year: '2024', status: 'read' },
            { id: 2, title: 'Book Two', author: 'Author Two', year: '2025', status: 'pending' },
        ];

        render(<BooksList bookList={mockBookList} onDeleteBook={() => { }} onEditBook={() => { }} loading={false} saving={false} />);

        expect(screen.getByText('Book One')).toBeTruthy();
        expect(screen.getByText('Book Two')).toBeTruthy();
    });

    test('calls onEditBook when Edit button clicked', () => {
        const mockBook = { id: 1, title: 'Book One', author: 'Author One', year: '2025', status: 'read' };
        let edited = null;

        function onEditBook(book) {
            edited = book;
        }

        render(<BooksList bookList={[mockBook]} onDeleteBook={() => { }} onEditBook={onEditBook} loading={false} saving={false} />);

        const editButton = screen.getByRole('button', { name: /edit/i });
        editButton.click();

        expect(edited).toEqual(mockBook);
    });

    test('calls onDeleteBook on delete click if confirm true', () => {
        let deleted = false;
        const mockBook = { id: 1, title: 'Book One', author: 'Author One', year: '2025', status: 'pending' };

        const onDeleteBook = () => {
            deleted = true;
            return Promise.resolve();
        };

        window.confirm = () => true;

        render(<BooksList bookList={[mockBook]} onDeleteBook={onDeleteBook} onEditBook={() => { }} loading={false} saving={false} />);
        screen.getByText('Delete').click();

        expect(deleted).toBe(true);
    });
});