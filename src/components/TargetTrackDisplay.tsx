import React from 'react';
import AudioFeaturesParameter from './AudioFeaturesParameter';
import { SpotifyTrackDisplay } from '@/types';

type TargetTrackDisplayProps = {
  trackDisplay?: SpotifyTrackDisplay | null;
};

const TargetTrackDisplay: React.FC<TargetTrackDisplayProps> = ({
  trackDisplay,
}) => {
  return (
    <div className="w-full h-fit mx-auto border rounded-lg bg-gradient-to-r from-cyan-200 to-yellow-600 p-2 flex flex-col justify-center shadow-lg">
      <h3 className="text-center font-semibold leading-6 text-gray-900 p-3">
        Target Track
      </h3>
      {trackDisplay && (
        <div className="flex">
          {/* 左側: トラックの詳細 */}
          <div className=" w-1/2 text-center m-2 p-2">
            {trackDisplay.image ? (
              <img
                className="shadow-xl rounded-xl mb-4"
                src={trackDisplay.image}
                alt="Album cover"
              />
            ) : (
              <div className="shadow-xl rounded-xl mb-4 bg-gray-200 h-48" />
            )}
            <h3 className="font-bold text-gray-800 text-xl mb-1">
              {trackDisplay.name ?? 'No Title'}
            </h3>
            <p className="text-gray-500 mb-4">
              {trackDisplay.artist ?? 'Unknown Artist'}
            </p>
          </div>
          {/* 右側: パラメーター部分*/}
          <div className="w-1/2 m-2 p-2">
            {trackDisplay.audioFeatures ? (
              <AudioFeaturesParameter
                audioFeatures={trackDisplay.audioFeatures}
              />
            ) : (
              <p>No Audio Features Available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TargetTrackDisplay;
