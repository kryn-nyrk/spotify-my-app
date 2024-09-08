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
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Your Playlist</h2>
      <div className="mb-4 max-h-60 overflow-auto">
        {playlist.length > 0 ? (
          playlist.map((track) => (
            <div
              key={track.id}
              className="flex items-center mb-2 bg-white rounded-md shadow p-3"
            >
              <img
                src={track.album.images[1].url}
                alt={track.name}
                className="w-16 h-16 rounded-md"
              />
              <div className="ml-4 flex-1">
                <p className="text-lg font-semibold text-gray-800">
                  {track.name}
                </p>
                <p className="text-gray-600">
                  {track.artists.map((artist) => artist.name).join(', ')}
                </p>
              </div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white rounded-full px-3 py-1"
                onClick={() => removeFromPlaylist(track.id)}
              >
                ×
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No tracks in your playlist</p>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          placeholder="Enter playlist name"
          className="flex-1 p-2 border rounded-md"
        />
        <button
          onClick={() => createPlaylist(playlistName)}
          disabled={isLoading || playlistName === ''}
          className="bg-green-500 hover:bg-green-700 text-white rounded-full px-4 py-2"
        >
          {isLoading ? 'Creating...' : 'Create Playlist'}
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default PlaylistCreator;
