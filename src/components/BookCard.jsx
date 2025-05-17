export const BookCard = ({ book, onDelete, onEdit }) => {
    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this book?") === true) {
            onDelete().then(() => {
                alert("Book deleted successfully!");
            });
        }
    }

    return (
        <li>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <p>{book.year}</p>
            <span>{book.status}</span>
            <button onClick={onEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};
