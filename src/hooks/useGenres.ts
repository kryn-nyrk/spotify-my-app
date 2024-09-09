'use client';

import { useState } from 'react';

export const useGenres = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleGenreChange = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleGenreRemove = (genre: string) => {
    setSelectedGenres((prev) => prev.filter((g) => g !== genre));
  };

  return {
    selectedGenres,
    handleGenreChange,
    handleGenreRemove,
  };
};
