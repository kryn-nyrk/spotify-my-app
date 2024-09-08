'use client';

import PreviewPlayer from './PreviewPlayer';
import { SpotifyTrack, SavedTrackItem } from '@/types';

type SavedTrackListProps = {
  savedTracks: SavedTrackItem[];
  total: number;
  onTrackClick: (track: SpotifyTrack) => void;
};

const SavedTrackList: React.FC<SavedTrackListProps> = ({
  savedTracks,
  total,
  onTrackClick,
}) => {
  return (
    <>
      <h2 className="text-center font-bold text-lg text-white">
        My favorite track
      </h2>
      <p className="text-gray-300 ml-3">Total: {total}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {savedTracks.map(({ track, added_at }) => (
          <div
            key={track.id}
            className="bg-gray-900 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => onTrackClick(track)}
          >
            <img
              src={track.album.images[1]?.url}
              alt={track.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-400">
                {track.name}
              </h3>
              <p className="text-gray-200">
                {track.artists.map((artist) => artist.name).join(', ')}
              </p>
              <p className="text-gray-500">{track.album.name}</p>
              <p className="text-xs text-red-400">
                Added on:{new Date(added_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SavedTrackList;
