import { BookCard } from './BookCard';

export const BooksList = ({ bookList }) => {
    if (bookList.length === 0) {
        return <h3>Empty books list</h3>;
    }

    return (
        <ul>
            {bookList.map((book) => {
                console.log(book);
                return <BookCard key={book.id} book={book} />;
            })}
        </ul>
    );
};