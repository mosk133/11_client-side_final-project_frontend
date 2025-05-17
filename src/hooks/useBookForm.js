import { useState } from "react";

export const useBookForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  const openFormForAdd = () => {
    setEditingBook(null);
    setIsVisible(true);
  };

  const openFormForEdit = (book) => {
    setEditingBook(book);
    setIsVisible(true);
  };

  const closeForm = () => {
    setIsVisible(false);
  };

  return {
    isVisible,
    editingBook,
    openFormForAdd,
    openFormForEdit,
    closeForm,
  };
};
