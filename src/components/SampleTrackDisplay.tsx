import React from 'react';
import { SpotifyAudioFeatures } from '@/types';
import AudioFeaturesParameter from './AudioFeaturesParameter';

type AudioFeaturesProps = {
  audioFeatures: SpotifyAudioFeatures | undefined;
  trackDetails: { name: string; artist: string; image: string };
};

const multiplyBy100 = (
  value: number | undefined,
  decimalPlaces: number = 3
): number => {
  if (value === undefined) return 0;
  const result = value * 100;
  return parseFloat(result.toFixed(decimalPlaces));
};

const SampleTrackDisplay: React.FC<AudioFeaturesProps> = ({
  audioFeatures,
  trackDetails,
}) => {
  return (
    <div className="w-4/5 max-w-xs mx-auto border rounded-lg bg-gradient-to-r from-pink-200 to-yellow-200 p-7 flex flex-col justify-center shadow-lg">
      <h3 className="text-center font-semibold leading-6 text-gray-900 p-3">
        Select Track
      </h3>
      <img
        className="shadow-xl rounded-xl mb-4"
        src={trackDetails.image}
        alt="Album cover"
      />
      <div className="text-center m-3 p-2">
        <h3 className="font-bold text-gray-800 text-xl mb-1">
          {trackDetails.name}
        </h3>
        <p className="text-gray-500 mb-4">{trackDetails.artist}</p>
        <AudioFeaturesParameter audioFeatures={audioFeatures} />
      </div>
    </div>
  );
};

export default SampleTrackDisplay;
