import React from 'react';
import { SpotifyAudioFeatures } from '@/types';
import AudioFeaturesParameter from './AudioFeaturesParameter';

type AudioFeaturesProps = {
  audioFeatures: SpotifyAudioFeatures | undefined;
  trackDetails: { name: string; artist: string; image: string };
};

const SelectTrackDisplay: React.FC<AudioFeaturesProps> = ({
  audioFeatures,
  trackDetails,
}) => {
  return (
    <div className="w-full h-fit mx-auto border rounded-lg bg-gradient-to-r from-pink-200 to-yellow-200 p-2 flex flex-col justify-center shadow-lg">
      <h3 className="text-center font-semibold leading-6 text-gray-900 p-3">
        Select Track
      </h3>
      {/* flexboxでレイアウト変更 */}
      <div className="flex">
        {/* 左側: トラックの詳細 */}
        <div className=" w-1/2 text-center m-2 p-2">
          <img
            className="shadow-xl rounded-xl mb-4"
            src={trackDetails.image}
            alt="Album cover"
          />
          <h3 className="font-bold text-gray-800 text-xl mb-1">
            {trackDetails.name}
          </h3>
          <p className="text-gray-500 mb-4">{trackDetails.artist}</p>
        </div>
        {/* 右側: パラメーター部分*/}
        <div className="w-1/2 m-2 p-2">
          <AudioFeaturesParameter audioFeatures={audioFeatures} />
        </div>
      </div>
    </div>
  );
};

export default SelectTrackDisplay;
