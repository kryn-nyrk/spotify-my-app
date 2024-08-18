'use client';

import { useEffect, useState } from 'react';
import { SpotifyTrack, SpotifySavedTracks, SavedTrackItem } from '@/types';

export const useSample = () => {
  const [savedTracks, setSavedTracks] = useState<SavedTrackItem[]>([]);
  const [limit, setLimit] = useState<number>(20);
  const [offset, setOffset] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSavedTracks = async () => {
      try {
        setIsLoading(true);
        const savedTracksResponse = await fetch(
          `/api/spotify/saved-tracks?limit=${limit}&offset=${offset}`
        );
        const data: SpotifySavedTracks = await savedTracksResponse.json();
        setSavedTracks(data.items);
        setTotal(data.total);

        const trackDetailsAndFeatures = await Promise.all(
          savedTracks.map(async (item) => {
            const trackDetails = {
              track: item.track.name,
              artist: item.track.artists[0].name,
              image: item.track.album.images[0]?.url || '',
            };
            const audioFeaturesResponse = await fetch(
              `/api/spotify/audio-features/${item.track.id}`
            );
            const audioFeatures = await audioFeaturesResponse.json();

            return {
              details: [trackDetails],
              audioFeatures: [audioFeatures],
            };
          })
        );
        console.log(trackDetailsAndFeatures);
        return trackDetailsAndFeatures;

        /*
        const trackIds = data.items.map((item) => item.track.id);

        const features = await Promise.all(
          trackIds.map(async (id) => {
            const response = await fetch(`/api/spotify/audio-features/${id}`);
            const data = await response.json();
            return data;
          })
        );
        console.log(features);
        */
      } catch (error) {
        setError('お気に入りトラックの取得に失敗しました。');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSavedTracks();
  }, [limit, offset]);

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
    hasNextPage: offset + limit < total,
    hasPrevPage: offset + 0,
  };
};
