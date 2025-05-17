import { useState, useEffect } from "react";
import { useUIStates } from "../hooks/useUIStates";

export const useBooks = () => {
  const [books, setBook] = useState([]);
  const { isLoading, handleLoading, isSaving, handleSaving } = useUIStates();
  const URL = import.meta.env.VITE_API_URL;

  const addBook = async (newBook) => {
    handleSaving(true);
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
      handleSaving(false);
    }
  };

  const updateBook = async (updatedBook) => {
    handleSaving(true);
    try {
      const response = await fetch(`${URL}/${updatedBook.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: updatedBook.title,
          author: updatedBook.author,
          year: updatedBook.year,
          status: updatedBook.status,
        }),
      });

      const saved = await response.json();

      setBook((currentBooks) =>
        currentBooks.map((book) => (book.id === saved.id ? saved : book))
      );
    } catch (error) {
      console.error("Error updating book:", error);
    } finally {
      handleSaving(false);
    }
  };

  const deleteBook = async (id) => {
    handleLoading(true);
    try {
      await fetch(`${URL}/${id}`, { method: "DELETE" });
      setBook((current) => current.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    } finally {
      handleLoading(false);
    }
  };

  useEffect(() => {
    globalThis
      .fetch(import.meta.env.VITE_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
        handleLoading(false);
      })
      .catch((error) => {
        console.error("Error", error);
        handleLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isSaving === true) {
      setTimeout(() => {
        alert("Book added successfully!");
      }, 500);
    }
  }, [isSaving]);

  return {
    books,
    addBook,
    updateBook,
    deleteBook,
    isLoading,
    isSaving,
  };
};
