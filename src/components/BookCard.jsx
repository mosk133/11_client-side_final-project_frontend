export const BookCard = ({ book, onDelete }) => {

    function deleteAlert() {
        if (confirm("Are you sure you want to detele this book?") == true) {
            onDelete().then(() => {
                setTimeout(() => {
                    alert("Book deleted successfully!");
                }, 800);
            });
        }
    }

    return (
        <li>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <p>{book.year}</p>
            <span>{book.status}</span>
            <button onClick={deleteAlert}>Delete</button>
        </li>
    );
};
