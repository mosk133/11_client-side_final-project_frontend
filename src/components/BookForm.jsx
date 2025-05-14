export const BookForm = ({ onCreateBook, isSaving }) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const title = formData.get('title');
        const author = formData.get('author');
        const year = formData.get('year');
        const status = formData.get('status');

        const newBook = {
            title: title,
            author: author,
            year: year,
            status: status
        };

        onCreateBook(newBook);

        event.target.reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Book title" required />
                <input type="text" name="author" placeholder="Book author" required />
                <input type="text" name="year" placeholder="Year" required />
                <select name="status" defaultValue="pending">
                    <option value="pending">Pending</option>
                    <option value="in progress">In Progress</option>
                    <option value="read">Read</option>
                </select>
                <button type="submit" disabled={isSaving}>
                    {isSaving ? "Saving..." : "Add Book"}
                </button>
            </form>
        </div>
    )
}