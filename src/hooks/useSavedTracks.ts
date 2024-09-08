'use client';

import { useEffect, useState } from 'react';
import { SpotifySavedTracks, SavedTrackItem } from '@/types';

export const useSavedTracks = () => {
  const [savedTracks, setSavedTracks] = useState<SavedTrackItem[]>([]);

  const [limit, setLimit] = useState<number>(30);
  const [offset, setOffset] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  //　現在のページを計算する
  const currentPage = Math.floor(offset / limit) + 1;

  useEffect(() => {
    const fetchSavedTracks = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `/api/spotify/saved-tracks?limit=${limit}&offset=${offset}`
        );
        const data: SpotifySavedTracks = await response.json();
        setSavedTracks(data.items);
        setTotal(data.total);
      } catch (error) {
        setError('お気に入りトラックの取得に失敗しました。');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSavedTracks();
  }, [limit, offset]);

  useEffect(() => {
    const getMaxPageNumbers = (total: number, limit: number) => {
      const maxPageNumbers = Math.ceil(total / limit);
      const pageNumbersArray = Array.from(
        { length: maxPageNumbers },
        (_, i) => i + 1
      );
      setPageNumbers(pageNumbersArray);
    };
    getMaxPageNumbers(total, limit);
  }, [total, limit]);

  const nextPage = () => {
    if (offset + limit < total) {
      setOffset((prev) => prev + limit);
    }
  };

  const prevPage = () => {
    if (offset > 0) {
      setOffset((prev) => prev - limit);
    }
  };

  return {
    savedTracks,
    total,
    isLoading,
    error,
    nextPage,
    prevPage,
    pageNumbers,
    offset,
    setOffset,
    hasNextPage: offset + limit < total,
    hasPrevPage: offset > 0,
    currentPage,
    limit,
  };
};
