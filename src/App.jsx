import './App.css'
import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { BooksList } from './components/BooksList';

function App() {
  const [books, setBooks] = useState([]);
  const URL = "http://localhost:8080/books";

  useEffect(() => {
    globalThis.fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <>
      <Header />
      <BooksList bookList={books} />
    </>
  )
}

export default App
