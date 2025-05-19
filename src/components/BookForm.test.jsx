import { describe, test, expect } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react';
import { afterEach } from 'vitest';
import { BookForm } from './BookForm';
// import styles from "./BookForm.module.css";

describe("Given the BookCard component", () => {
    afterEach(() => {
        cleanup();
    });

    test("displays 'Saving...' and disables the button when isSaving is true", () => {
        render(<BookForm editingBook={false} isSaving={true} onSubmit={() => {}} />)

        const button = screen.getByRole("button", { name: "Saving..." });

        expect(button.disabled).to.be.true;            
        expect(button.textContent).to.equal('Saving...');
    });
});
