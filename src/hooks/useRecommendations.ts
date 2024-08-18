'use client';

import { useEffect, useState } from 'react';
import { SpotifyRecommendations, SpotifyTrack } from '../types';

/*
type UseRecommendationsProps = {
  seedTracks: string[];
  seedGenres: string[];
  limit?: number;
};
*/

// 引数を受け取るのはフェッチ関数？ props? 要検討
export const useRecommendations = (
  seedTracks: string[] | null,
  seedGenres: string[] | null,
  limit: number = 10
) => {
  const [recommendationsTracks, setRecommendationsTracks] = useState<
    SpotifyTrack[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setIsLoading(true);
        //const seedTrackString = seedTracks?.join(',');
        //const seedGenreString = seedGenres.join(',');
        const response = await fetch(
          `api/spotify/recommendations?seed_tracks=${seedTracks}&seed_genres=${seedGenres}&limit=${limit}`
        );
        const data: SpotifyRecommendations = await response.json();
        console.log(data);
        setRecommendationsTracks(data.tracks);
      } catch (error) {
        setError('おすすめトラックの取得に失敗しました。');
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecommendations();
  }, [limit, seedGenres]);

  return {
    recommendationsTracks,
    isLoading,
    error,
  };
};
