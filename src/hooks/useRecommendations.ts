'use client';

import { useEffect, useState } from 'react';
import {
  SpotifyRecommendations,
  SpotifyTrack,
  SpotifyTrackDisplay,
} from '../types';
import { useAudioFeatures } from './useAudioFeatures';

export const useRecommendations = (
  seedTracks: string[] | null,
  seedGenres: string[] | null,
  limit: number = 50
) => {
  const [recommendationsTracks, setRecommendationsTracks] = useState<
    SpotifyTrack[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // レコメンドトラックからディスプレイ用のトラック情報とオーディオフィーチャーズを取得する
  const [targetTrackId, setTargetTrackId] = useState<string | null>(null);
  const [targetTrackDisplay, setTargetTrackDisplay] =
    useState<SpotifyTrackDisplay | null>(null);

  const { audioFeatures } = useAudioFeatures(targetTrackId || '');

  const onTargetTrackDisplay = (track: SpotifyTrack) => {
    setTargetTrackId(track.id);
    setTargetTrackDisplay({
      name: track.name,
      artist: track.artists.map((artist) => artist.name).join(','),
      image: track.album.images[1].url,
      // カスタムフック使用のため別のuseEffectで更新をする
      audioFeatures: undefined,
    });
  };

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setIsLoading(true);
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
  }, [seedGenres]);

  useEffect(() => {
    if (targetTrackId && targetTrackDisplay) {
      setTargetTrackDisplay((prev) => {
        // prev が null でない場合は、前の状態を維持しつつ audioFeatures を更新
        return prev
          ? {
              ...prev,
              // undefinedの場合はundefinedを設定
              audioFeatures: audioFeatures || undefined,
            }
          : // prev が null の場合はそのまま null を返す
            null;
      });
    }
  }, [audioFeatures, targetTrackId]);

  return {
    recommendationsTracks,
    targetTrackDisplay,
    onTargetTrackDisplay,
    audioFeatures,
    isLoading,
    error,
  };
};
