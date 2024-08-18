'use client';

import React, { FC } from 'react';
import { SpotifyTrack, SpotifyRecommendations } from '../types';
import PreviewPlayer from './PreviewPlayer';

const RecommendationsList = () => {
  if (!recommendationTracks || recommendationTracks.tracks?.length === 0) {
    return <p>レコメンドするためにはトラックを選択してください。</p>;
  }

  return (
    <>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Recommended Tracks</h2>
        <ul className="space-y-4">
          {recommendationTracks?.tracks?.map((track: any) => (
            <li key={track.id} className="flex items-center space-x-4">
              <img
                src={track.album.images[0]?.url}
                alt={track.name}
                className="w-12 h-12 rounded"
              />
              <div>
                <p className="text-lg font-medium">{track.name}</p>
                <p className="text-sm text-gray-500">
                  Artist:{' '}
                  {track.artists.map((artist) => artist.name).join(', ')}
                </p>
                <p className="text-sm text-gray-500">
                  Album: {track.album.name}
                </p>
                {track.preview_url && (
                  <PreviewPlayer previewUrl={track.preview_url} />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      )
    </>
  );
};

export default RecommendationsList;
