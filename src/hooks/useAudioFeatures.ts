'use client';

import { useEffect, useState } from 'react';
import { SpotifyAudioFeatures } from '@/types';

export const useAudioFeatures = (trackId: string) => {
  const [audioFeatures, setAudioFeatures] = useState<
    SpotifyAudioFeatures | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/spotify/audio-features/${trackId}`);
        const data: SpotifyAudioFeatures = await response.json();
        setAudioFeatures(data);
      } catch (error) {
        setError('オーディオ情報の取得に失敗しました。');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeatures();
  }, [trackId]);

  return { audioFeatures, setAudioFeatures, isLoading, error };
};
