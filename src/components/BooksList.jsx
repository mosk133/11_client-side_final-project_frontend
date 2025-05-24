import { BookCard } from './BookCard';
import styles from './BooksList.module.css';

export const BooksList = ({ bookList, onDeleteBook, onEditBook, loading, saving }) => {
    if (loading) {
        return (
            <div className={styles['books-list__loading']}>
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
        <ul className={styles['books-list']}>
            {bookList.map((book) => {
                return <BookCard key={book.id} book={book} onDelete={() => onDeleteBook(book.id)} onEdit={() => onEditBook(book)} />;
            })}
        </ul>
    );
};
