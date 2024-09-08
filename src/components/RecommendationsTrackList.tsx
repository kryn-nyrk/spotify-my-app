'use client';

import React from 'react';
import TrackCard from './TrackCard';
import Loading from './Loading';
import { SpotifyTrack } from '@/types';

type RecommendationsTrackListProps = {
  tracks: SpotifyTrack[];
  onAddToPlaylist: (track: SpotifyTrack) => void;
  onTargetTrackDisplay: (track: SpotifyTrack) => void;
  isLoading: boolean;
};

const RecommendationsTrackList: React.FC<RecommendationsTrackListProps> = ({
  tracks,
  onAddToPlaylist,
  onTargetTrackDisplay,
  isLoading,
}) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
      <h2 className="text-2xl text-gray-200 font-semibold mb-4 sticky top-0  z-10 p-4 shadow">
        Recommendations
      </h2>
      <div className="max-h-[650px] overflow-y-auto">
        {tracks.map((track) => (
          <TrackCard
            key={track.id}
            track={track}
            onAddToPlaylist={onAddToPlaylist}
            onTargetTrackDisplay={onTargetTrackDisplay}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendationsTrackList;
