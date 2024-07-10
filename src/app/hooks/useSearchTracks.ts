'use client';

import { useEffect, useState } from 'react';
import { SpotifyTrack, SpotifySavedTracksResponse } from '../types';

export const useSearchTracks = () => {
  const [searchTracks, setSearchTracks] = useState<SpotifyTrack[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLimit, setSearchLimit] = useState(20);
  const [searchOffset, setSearchOffset] = useState(0);

  const [selectedTrack, setSelectedTrack] = useState<SpotifyTrack | undefined>(
    undefined,
  );

  useEffect(() => {
    if (searchQuery.trim() === '') return;

    const fetchSearchTracks = async () => {
      try {
        const response = await fetch(
          `/api/spotify/search?query=${encodeURIComponent(searchQuery)}&limit=${searchLimit}&offset=${searchOffset}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        if (response.ok) {
          const data = await response.json();
          setSearchTracks(data.items);
        } else {
          console.log('トラックの取得に失敗しました。');
          setSearchTracks([]);
        }
      } catch (error) {
        console.error('エラーが発生しました。', error);
        setSearchTracks([]);
      }
    };

    fetchSearchTracks();
  }, [searchQuery, searchLimit, searchOffset]);

  return {
    searchLimit,
    setSearchLimit,
    searchOffset,
    setSearchOffset,
    searchQuery,
    setSearchQuery,
    searchTracks,
  };
};
