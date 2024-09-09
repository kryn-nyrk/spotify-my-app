'use client';

import { useState } from 'react';
import { SpotifyTrack } from '@/types';

export const useTrackModal = () => {
  const [selectedTrack, setSelectedTrack] = useState<SpotifyTrack | undefined>(
    undefined
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (track: SpotifyTrack) => {
    setSelectedTrack(track);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTrack(undefined);
  };

  return {
    selectedTrack,
    isModalOpen,
    openModal,
    closeModal,
  };
};
