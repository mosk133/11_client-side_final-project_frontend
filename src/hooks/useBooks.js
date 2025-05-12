import { useState, useEffect } from "react";

export const useBooks = () => {
  const [books, setBook] = useState([]);
  const URL = "http://localhost:8080/books";

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
  };
};
