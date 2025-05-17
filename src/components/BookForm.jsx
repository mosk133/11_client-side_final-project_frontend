export const BookForm = ({ onCreateBook, onUpdateBook, editingBook, isSaving }) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const bookData = {
            title: formData.get('title'),
            author: formData.get('author'),
            year: formData.get('year'),
            status: formData.get('status'),
        }

        if (editingBook) {
            onUpdateBook({ ...bookData, id: editingBook.id });
            return;
        }

        onCreateBook(bookData);
        event.target.reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Book title" defaultValue={editingBook ? editingBook.title : ''} required />
                <input type="text" name="author" placeholder="Book author" defaultValue={editingBook ? editingBook.author : ''} required />
                <input type="text" name="year" placeholder="Year" defaultValue={editingBook ? editingBook.year : ''} required />
                <select name="status" defaultValue={editingBook ? editingBook.status : 'pending'} >
                    <option value="pending">Pending</option>
                    <option value="in progress">In Progress</option>
                    <option value="read">Read</option>
                </select>
                <button type="submit" disabled={isSaving}>
                    {isSaving ? "Saving..." : editingBook ? "Update Book" : "Add Book"}
                </button>
            </form>
        </div>
    )
}
