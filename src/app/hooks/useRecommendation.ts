'use client';

import { useEffect, useState } from 'react';
import { SpotifyRecommendationResponse, SpotifyTrack } from '../types';

export const useRecommendation = () => {
  const [recommendationTracks, setRecommendationTracks] = useState<
    SpotifyTrack[]
  >([]);
  const [seedTracks, setSeedTracks] = useState<string>(
    '1PRDZVEJoHmMzMIzNNwWs6',
  );
  const [recommendationLimit, setRecommendationLimit] = useState<number>(20);

  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const response = await fetch(
          `api/spotify/recommendation?limit=${recommendationLimit}&seed_tracks=${seedTracks}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        if (response.ok) {
          const data: SpotifyRecommendationResponse = await response.json();
          console.log(data);
          setRecommendationTracks(data.tracks);
        }
      } catch (error) {
        console.log('useRecommendationでエラーが発生しました。');
        setRecommendationTracks([]);
      }
    };
    fetchRecommendation();
  }, [seedTracks, recommendationLimit]);

  return { recommendationTracks, setSeedTracks, setRecommendationLimit };
};
