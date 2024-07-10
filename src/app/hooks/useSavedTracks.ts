'use client';

import { useEffect, useState } from 'react';
import { SpotifyTrack, SpotifySavedTracksResponse } from '../types';

export const useSavedTracks = () => {
  const [savedTracks, setSavedTracks] = useState<SpotifyTrack[]>([]);
  const [savedLimit, setSavedLimit] = useState(20);
  const [savedOffset, setSavedOffset] = useState(0);
  //const [savedTotal, setSavedTotal] = useState(0);

  const [selectedTrack, setSelectedTrack] = useState<SpotifyTrack | undefined>(
    undefined,
  );

  useEffect(() => {
    const fetchSavedTracks = async () => {
      try {
        const response = await fetch(
          `/api/spotify/saved?limit=${savedLimit}&offset=${savedOffset}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        if (response.ok) {
          const data: SpotifySavedTracksResponse = await response.json();
          setSavedTracks(data.items.map((item) => item.track));
          //setSavedTotal(data.total);
        } else {
          console.log('トラックの取得に失敗しました。');
          setSavedTracks([]);
        }
      } catch (error) {
        console.error('エラーが発生しました。', error);
        setSavedTracks([]);
      }
    };

    fetchSavedTracks();
  }, [savedLimit, savedOffset]);

  return {
    savedTracks,
    savedLimit,
    setSavedLimit,
    savedOffset,
    setSavedOffset,
  };
};
