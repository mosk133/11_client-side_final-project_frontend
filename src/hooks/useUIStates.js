import { useState } from "react";

export const useUIStates = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleSaving = (value) => {
    setIsSaving(value);
  }

  const handleLoading = (value) => {
    setIsLoading(value);
  }

  const handleVisible = (value) => {
    setIsVisible(value);
  }

  return {
    isSaving,
    isLoading,
    isVisible,
    handleSaving,
    handleLoading,
    handleVisible,
  };
};
