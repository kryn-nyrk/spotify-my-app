'use client';

import { useState } from 'react';
import { SpotifyTrack } from '@/types';

export const useCreatePlaylist = () => {
  const [playlist, setPlaylist] = useState<SpotifyTrack[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addToPlaylist = (track: SpotifyTrack) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, track]);
  };

  const removeFromPlaylist = (trackId: string) => {
    setPlaylist((prevPlaylist) =>
      prevPlaylist.filter((track) => track.id !== trackId)
    );
  };

  const createPlaylist = async (playlistName: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/spotify/createPlaylist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: playlistName, tracks: playlist }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error('プレイリストの作成に失敗しました。');
      }

      const data = await response.json();
      console.log('プレイリストの作成に成功しました！', data);
      setPlaylist([]);
      // any?
    } catch (error: any) {
      setError(error.message || 'プレイリストの作成中にエラーが発生しました。');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    playlist,
    isLoading,
    error,
    addToPlaylist,
    removeFromPlaylist,
    createPlaylist,
  };
};
