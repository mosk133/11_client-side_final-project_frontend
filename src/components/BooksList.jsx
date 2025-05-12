import { BookCard } from './BookCard';

export const BooksList = ({ bookList, onDeleteBook }) => {
    if (bookList.length === 0) {
        return <h3>Empty books list</h3>;
    }

    return (
        <ul>
            {bookList.map((book) => {
                return <BookCard key={book.id} book={book} onDelete={() => onDeleteBook(book.id)} />;
            })}
        </ul>
    );
};