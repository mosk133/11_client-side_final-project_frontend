import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header component', () => {
    test('renders header title', () => {
        render(<Header />);

        expect(screen.getByText('My Book Collection')).toBeTruthy();
    });
});