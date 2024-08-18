'use client';

import React, { useState } from 'react';
import { useCreatePlaylist } from '@/hooks/useCreatePlaylist';
import { SpotifyTrack } from '@/types';

type PlaylistCreatorProps = {
  playlist: SpotifyTrack[];
  removeFromPlaylist: (track: string) => void;
  createPlaylist: (name: string) => void;
};

const PlaylistCreator: React.FC<PlaylistCreatorProps> = ({
  playlist,
  removeFromPlaylist,
  createPlaylist,
}) => {
  const { isLoading, error } = useCreatePlaylist();
  const [playlistName, setPlaylistName] = useState<string>('');

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Your Playlist</h2>
      <div className="mb-4">
        {playlist.length > 0 &&
          playlist.map((track) => (
            <div key={track.id} className="grid grid-cols-3 items-center mb-2">
              <img src={track.album.images[1].url} alt={track.name} />
              <div className="ml-5">
                <p className="text-lg font-semibold text-gray-800">
                  track: {track.name}
                </p>
                <p className="text-gray-600">
                  artist:{' '}
                  {track.artists.map((artist) => artist.name).join(', ')}
                </p>
                <button
                  className="h-1/6 w-1/2 bg-red-500 hover:bg-red-700 rounded-full text-white"
                  onClick={() => removeFromPlaylist(track.id)}
                >
                  ×
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="p-4">
        <input
          type="text"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          placeholder="please, playlist name!"
          className="m-2"
        />
        <button
          onClick={() => createPlaylist(playlistName)}
          disabled={isLoading}
          className="bg-green-500 text-white rounded-full px-4 py-2"
        >
          {isLoading ? 'Creating...' : 'Create Playlist'}
        </button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default PlaylistCreator;
