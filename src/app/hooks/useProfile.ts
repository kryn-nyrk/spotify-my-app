'use client';

import { useEffect, useState } from 'react';
import { SpotifyProfile } from '../types';

export const useProfile = () => {
  const [profile, setProfile] = useState<SpotifyProfile | null>(null);

  useEffect(() => {
    /*
    cookieからアクセストークンを取得する処理を後ほど記述 
    */
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/spotify/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          console.log('プロフィールの取得に失敗しました。');
          setProfile(null);
        }
      } catch (error) {
        console.error('エラーが発生しました。', error);
        setProfile(null);
      }
    };

    fetchProfile();
  }, []);

  return {
    profile,
    setProfile,
  };
};
