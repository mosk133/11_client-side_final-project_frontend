import { describe, test, expect } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react';
import { afterEach } from 'vitest';
import { BookCard } from './BookCard';
import styles from "./BookCard.module.css";

describe("Given the BookCard component", () => {
    afterEach(() => {
        cleanup();
    });

    test("When book status is 'pending' Then it should render title and status with correct styles", () => {
        const mockBook =
        {
            id: 1,
            title: "Title",
            author: "Kai Mendoza",
            year: 2022,
            status: "pending",
        };

        render(<BookCard book={mockBook} />);

        const titleElement = screen.getByText("Title");
        const statusElement = screen.getByText("pending");

        expect(titleElement.className).toContain(styles["book-card__title"]);

        expect(statusElement.className).toContain(styles["book-card__status"]);
        expect(statusElement.className).toContain(styles["book-card__status--pending"]);
    });

    test("When book status is 'in progress' Then it should render title and status with correct styles", () => {
        const mockBook =
        {
            id: 1,
            title: "Title",
            author: "Kai Mendoza",
            year: 2022,
            status: "in progress",
        };

        render(<BookCard book={mockBook} />);

        const titleElement = screen.getByText("Title");
        const statusElement = screen.getByText("in progress");

        expect(titleElement.className).toContain(styles["book-card__title"]);

        expect(statusElement.className).toContain(styles["book-card__status"]);
        expect(statusElement.className).toContain(styles["book-card__status--in-progress"]);
    });

    test("When book status is 'read' Then it should render title and status with correct styles", () => {
        const mockBook =
        {
            id: 1,
            title: "Title",
            author: "Kai Mendoza",
            year: 2022,
            status: "read",
        };

        render(<BookCard book={mockBook} />);

        const titleElement = screen.getByText("Title");
        const statusElement = screen.getByText("read");

        expect(titleElement.className).toContain(styles["book-card__title"]);

        expect(statusElement.className).toContain(styles["book-card__status"]);
        expect(statusElement.className).toContain(styles["book-card__status--read"]);
    });
});
