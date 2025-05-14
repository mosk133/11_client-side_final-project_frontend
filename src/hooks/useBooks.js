import { useState, useEffect } from "react";

export const useBooks = () => {
  const [books, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const URL = import.meta.env.VITE_API_URL;

  const addBook = async (newBook) => {
    setSaving(true);
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
      console.error("Error creating book:", error);
    } finally {
      setTimeout(() => setSaving(false), 1200);
    }
  };

  const deleteBook = async (id) => {
    setLoading(true);
    try {
      await fetch(`${URL}/${id}`, { method: "DELETE" });
      setBook((current) => current.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  useEffect(() => {
    globalThis
      .fetch(import.meta.env.VITE_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setBook(data);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error", error);
        setLoading(false);
      });
  }, []);

  //   globalThis
  //     .fetch(import.meta.env.VITE_API_URL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBook(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error", error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    if (saving === true) {
      setTimeout(() => {
        alert("Book added successfully!");
      }, 1000);
    }
  }, [saving]);

  return {
    books: books,
    addBook: addBook,
    deleteBook: deleteBook,
    loading: loading,
    saving: saving
  };
};
