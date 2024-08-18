import React from 'react';
import PreviewPlayer from './PreviewPlayer';
import { SpotifyTrack } from '@/types';

type TrackCardProps = {
  tracks: SpotifyTrack[];
  onAddToPlaylist: (track: SpotifyTrack) => void;
};

const TrackCard: React.FC<TrackCardProps> = ({ tracks, onAddToPlaylist }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
      {tracks.map((track) => (
        <div key={track.id}>
          <img
            src={track.album.images[1].url}
            alt={track.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {track.name}
              </h3>
              <p className="text-gray-600">
                {track.artists.map((artist) => artist.name).join(', ')}
              </p>
            </div>
            {track.preview_url && (
              <PreviewPlayer previewUrl={track.preview_url} />
            )}

            <button
              onClick={() => onAddToPlaylist(track)}
              className="bg-blue-500 hover:bg-blue-700 text-white rounded-full px-4 py-2 ml-4"
            >
              add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackCard;
