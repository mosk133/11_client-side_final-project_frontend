import { useState, useEffect } from "react";

export const useBooks = () => {
  const [books, setBook] = useState([]);
  const URL = import.meta.env.VITE_API_URL;

  const addBook = async (newBook) => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newBook.title,
          author: newBook.author,
          year: newBook.year,
          status: newBook.status,
        }),
      });

      const createdBook = await response.json();

      setBook((currentBooks) => [...currentBooks, createdBook]);
    } catch (error) {
      console.error("Error posting book:", error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await fetch(`${URL}/${id}`, { method: "DELETE" });
      
      setBook((current) => current.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  useEffect(() => {
    globalThis
      .fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return {
    books: books,
    addBook: addBook,
    deleteBook: deleteBook,
  };
};
