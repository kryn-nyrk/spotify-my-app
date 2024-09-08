'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PreviewPlayer from './PreviewPlayer';
import { SpotifyTrack } from '@/types';

type TrackCardProps = {
  track: SpotifyTrack;
  onAddToPlaylist: (track: SpotifyTrack) => void;
  onTargetTrackDisplay: (track: SpotifyTrack) => void;
};

const TrackCard: React.FC<TrackCardProps> = ({
  track,
  onAddToPlaylist,
  onTargetTrackDisplay,
}) => {
  return (
    <div className="flex items-center mb-4 p-2 bg-gray-700  rounded-lg">
      <img
        onClick={() => onTargetTrackDisplay(track)}
        src={track.album.images[0]?.url}
        alt={track.name}
        className="w-16 h-16 object-cover cursor-pointer rounded-md transition-transform transform hover:scale-110"
      />
      <div className="ml-4 flex-1">
        <div>
          <p className="text-lg font-semibold text-gray-200">{track.name}</p>
          <p className="text-gray-400">
            {track.artists.map((artist) => artist.name).join(', ')}
          </p>
        </div>
        <div className="flex items-center justify-end mt-2 space-x-4">
          {track.preview_url && (
            <PreviewPlayer previewUrl={track.preview_url} />
          )}
          <Link href={track.external_urls.spotify} target="_blank">
            <Image
              src="/images/Spotify_Logo_RGB_Green.png"
              alt="Spotifyで再生"
              width={120}
              height={120}
            />
          </Link>
          <button
            onClick={() => onAddToPlaylist(track)}
            className="ml-auto bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
