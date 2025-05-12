import './App.css'
import { Header } from './components/Header'
import { BooksList } from './components/BooksList';
import { BookForm } from './components/BookForm';
import { useBooks } from './hooks/useBooks'

function App() {
  const {books, addBook} = useBooks([]);

  return (
    <>
      <Header />
      <BookForm onCreateBook={addBook}/>
      <BooksList bookList={books} />
    </>
  )
}

export default App
