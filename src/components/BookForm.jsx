import styles from "./BookForm.module.css"

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
            <form onSubmit={handleSubmit} className={styles["book-form"]}>
                <h2 className={styles["book-form__title"]}>{editingBook ? "Edit Book" : "Add New Book"}</h2>

                <label className={styles["book-form__label"]} htmlFor="title">Title</label>
                <input className={styles['book-form__input']} type="text" name="title" placeholder="Enter book title" defaultValue={editingBook ? editingBook.title : ''} required />
                <label className={styles["book-form__label"]} htmlFor="author">Author</label>
                <input className={styles['book-form__input']} type="text" name="author" placeholder="Enter author name" defaultValue={editingBook ? editingBook.author : ''} required />

                <div className={styles["book-form__row"]}>
                    <div className={styles["book-form__field"]}>
                        <label className={styles["book-form__label"]} htmlFor="year">Publication Year</label>
                        <input className={styles['book-form__input']} type="text" name="year" placeholder="Year" defaultValue={editingBook ? editingBook.year : '2025'} required />
                    </div>
                    <div className={styles["book-form__field"]}>
                        <label className={styles["book-form__label"]} htmlFor="status">Reading Status</label>
                        <select className={styles['book-form__select']} name="status" defaultValue={editingBook ? editingBook.status : 'pending'} >
                            <option value="pending">Pending</option>
                            <option value="in progress">In Progress</option>
                            <option value="read">Read</option>
                        </select>
                    </div>
                </div>
                
                <div className={styles['book-form__actions']}>
                    <button className={styles['book-form__button']} type="submit" disabled={isSaving}>
                        {isSaving ? "Saving..." : editingBook ? "Update Book" : "Add Book"}
                    </button>
                </div>
            </form>
        </div>
    )
}
