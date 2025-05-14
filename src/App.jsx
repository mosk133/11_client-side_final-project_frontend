import './App.css'
import { Header } from './components/Header'
import { BooksList } from './components/BooksList';
import { BookForm } from './components/BookForm';
import { useBooks } from './hooks/useBooks'

function App() {
  const {books, addBook, deleteBook, loading, saving} = useBooks([]);

  return (
    <>
      <Header />
      <BookForm onCreateBook={addBook} isSaving={saving} />
      <BooksList bookList={books} onDeleteBook={deleteBook} loading={loading} saving={saving} />
    </>
  )
}

export default App
