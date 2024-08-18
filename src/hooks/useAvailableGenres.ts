'use client';

import { useEffect, useState } from 'react';

export const useAvailableGenres = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/spotify/available-genre-seeds');
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        setError('ジャンルの取得に失敗しました。');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGenres();
  }, []);

  return {
    genres,
    isLoading,
    error,
  };
};
