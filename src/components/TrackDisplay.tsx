import React from 'react';
import AudioFeaturesParameter from './AudioFeaturesParameter';
import AudioFeaturesInfo from './AudioFeaturesInfo';
import { SpotifyTrackDisplay } from '@/types';

type TrackDisplayProps = {
  title: string;
  track?: SpotifyTrackDisplay | null;
};

const TrackDisplay: React.FC<TrackDisplayProps> = ({ title, track }) => {
  return (
    <div className="w-full h-fit mx-auto  rounded-lg bg-gray-900 p-2 flex flex-col justify-center shadow-lg">
      <h3 className="text-center font-semibold leading-6 text-gray-200 p-3">
        {title}
      </h3>
      {track ? (
        <div className="flex">
          {/* 左側: トラックの詳細 */}
          <div className=" w-1/2 text-center m-2 p-2">
            <img
              className="shadow-xl rounded-xl mb-4"
              src={track.image}
              alt="Album cover"
            />
            <h3 className="font-bold text-gray-300 text-xl mb-1">
              {track.name}
            </h3>
            <p className="text-gray-500 mb-4">{track.artist}</p>
            <AudioFeaturesInfo audioFeatures={track.audioFeatures} />
          </div>
          {/* 右側: パラメーター部分*/}
          <div className="w-1/2 m-2 p-2">
            <AudioFeaturesParameter audioFeatures={track.audioFeatures} />
          </div>
        </div>
      ) : (
        <>
          <p className="text-gray-500 text-center m-2">
            No track in target track
          </p>
          <p className="text-red-600 text-center font-bold m-2">
            please, Recommendations track image to tap!
          </p>
        </>
      )}
    </div>
  );
};

export default TrackDisplay;
