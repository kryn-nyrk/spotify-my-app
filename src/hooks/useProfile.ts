'use client';

import { useEffect, useState } from 'react';
import { SpotifyMyProfile } from '../types';

export const useProfile = () => {
  const [profile, setProfile] = useState<SpotifyMyProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/spotify/profile');
        if (!response.ok) {
          throw new Error('useProfileでエラーが発生しました。');
        }

        const data = await response.json();
        setProfile(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return {
    profile,
    loading,
    error,
  };
};
