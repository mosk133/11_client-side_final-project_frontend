import './App.css'
import { Header } from './components/Header'
import { BooksList } from './components/BooksList';
import { BookForm } from './components/BookForm';
import { useBooks } from './hooks/useBooks'
import { useBookForm } from './hooks/useBookForm';

function App() {
  const { books, addBook, updateBook, deleteBook, isLoading, isSaving } = useBooks([]);
  const { isVisible, editingBook, openFormForAdd, openFormForEdit, closeForm } = useBookForm();

  return (
    <>
      <Header />

      <button onClick={isVisible ? closeForm : openFormForAdd}>
        {isVisible ? "Cancel" : "Add New Book"}
      </button>

      {isVisible && <BookForm onCreateBook={addBook} onUpdateBook={updateBook} editingBook={editingBook} isSaving={isSaving} />}
      <BooksList bookList={books} onDeleteBook={deleteBook} onEditBook={openFormForEdit} loading={isLoading} saving={isSaving} />
    </>
  )
}

export default App
