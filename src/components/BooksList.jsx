import { BookCard } from './BookCard';

export const BooksList = ({ bookList, onDeleteBook, onEditBook, loading, saving }) => {
    if (loading) {
        return (
            <div>
                <span>Loading books...</span>
            </div>
        )
    }
    
    if (saving) {
        return null;
    }

    if (bookList.length === 0) {
        return <h3>Empty books list</h3>;
    }

    return (
        <ul>
            {bookList.map((book) => {
                return <BookCard key={book.id} book={book} onDelete={() => onDeleteBook(book.id)} onEdit={() => onEditBook(book)}  />;
            })}
        </ul>
    );
};
