import styles from './BookCard.module.css';

const statusClassNames = {
    pending: styles['book-card__status--pending'],
    'in progress': styles['book-card__status--in-progress'],
    read: styles['book-card__status--read']
};

export const BookCard = ({ book, onDelete, onEdit }) => {
    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this book?") === true) {
            onDelete().then(() => {
                alert("Book deleted successfully!");
            });
        }
    }

    return (
        <li className={styles['book-card']}>
            <div className={styles['book-card__header']}>
                <h4 className={styles['book-card__title']}>{book.title}</h4>
                <p className={styles['book-card__year']}>{book.year}</p>
            </div>
            <p className={styles['book-card__author']}>{book.author}</p>
            <div className={styles['book-card__status-wrapper']}>
                <span className={`${styles['book-card__status']} ${statusClassNames[book.status]}`}>
                    {book.status}
                </span>
            </div>
            <div className={styles['book-card__actions']}>
                <button className={`${styles['book-card__button']} ${styles['book-card__button--edit']}`} onClick={onEdit}>Edit</button>
                <button className={`${styles['book-card__button']} ${styles['book-card__button--delete']}`} onClick={handleDelete}>Delete</button>
            </div>
        </li>
    );
};
