'use client';

import { useSearchParams } from 'next/navigation';
import { useAudioFeatures } from './useAudioFeatures';
import { useRecommendations } from './useRecommendations';
import { SpotifyTrackDisplay } from '@/types';

export const useTrackData = (trackId: string, genres: string[]) => {
  const params = useSearchParams();
  const trackName = params.get('trackName');
  const trackArtist = params.get('trackArtist');
  const trackImage = params.get('trackImage');

  const { audioFeatures } = useAudioFeatures(trackId);
  const {
    recommendationsTracks,
    isLoading,
    targetTrackDisplay,
    onTargetTrackDisplay,
    error,
  } = useRecommendations(trackId, genres);

  const trackDisplay: SpotifyTrackDisplay = {
    name: trackName,
    artist: trackArtist,
    image: trackImage,
    audioFeatures,
  };

  return {
    trackDisplay,
    recommendationsTracks,
    isLoading,
    targetTrackDisplay,
    onTargetTrackDisplay,
    error,
  };
};
