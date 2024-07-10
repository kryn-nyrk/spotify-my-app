'use client';

import { useEffect, useState, FC } from 'react';
import { SpotifyAudioFeature, SpotifyAudioFeatureResponse } from '../types';

export const useAudioFeature = (trackId?: string) => {
  const [audioFeature, setAudioFeature] = useState<
    SpotifyAudioFeature | undefined
  >(undefined);

  useEffect(() => {
    const fetchFeatures = async () => {
      if (!trackId) return;
      try {
        const response = await fetch(`/api/spotify/features/${trackId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data: SpotifyAudioFeature = await response.json();
          setAudioFeature(data);
        } else {
          console.log('オーディオ情報の取得に失敗しました。');
          setAudioFeature(undefined);
        }
      } catch (error) {
        console.error('エラーが発生しました。', error);
      }
    };
    fetchFeatures();
  }, [trackId]);

  return { audioFeature, setAudioFeature };
};
