'use client';

import React from 'react';
import { SpotifyAudioFeatures } from '@/types';

type AudioFeaturesParameterProps = {
  audioFeatures: SpotifyAudioFeatures | undefined;
};

const multiplyBy100 = (
  value: number | undefined,
  decimalPlaces: number = 3
): number => {
  if (value === undefined) return 0;
  const result = value * 100;
  return parseFloat(result.toFixed(decimalPlaces));
};

const AudioFeaturesParameter: React.FC<AudioFeaturesParameterProps> = ({
  audioFeatures,
}) => {
  console.log(audioFeatures);
  const data = [
    {
      label: 'acousticness',
      color: 'bg-amber-700',
      value: multiplyBy100(audioFeatures?.acousticness),
    },
    {
      label: 'danceability',
      color: 'bg-purple-700',
      value: multiplyBy100(audioFeatures?.danceability),
    },
    {
      label: 'energy',
      color: 'bg-orange-500',
      value: multiplyBy100(audioFeatures?.energy),
    },
    {
      label: 'instrumentalness',
      color: 'bg-teal-500',
      value: multiplyBy100(audioFeatures?.instrumentalness),
    },
    {
      label: 'liveness',
      color: 'bg-red-600',
      value: multiplyBy100(audioFeatures?.liveness),
    },
    {
      label: 'speechiness',
      color: 'bg-emerald-400',
      value: multiplyBy100(audioFeatures?.speechiness),
    },
    {
      label: 'valence',
      color: 'bg-pink-500',
      value: multiplyBy100(audioFeatures?.valence),
    },
  ];

  return (
    <>
      <div className="border rounded-xl bg-white bg-opacity-30 p-3 font-mono shadow-xl ">
        {data.map((item, index) => (
          <>
            <h2 className="text-xs mb-1">
              {item.label}: <span className="text-gray-500">{item.value}</span>
            </h2>

            <div
              key={index}
              className={`${item.color} bg-opacity-60 rounded-md text-md shadow-lg p-2 mb-2`}
              style={{ width: `${item.value}%` }}
            ></div>
          </>
        ))}
      </div>
    </>
  );
};

export default AudioFeaturesParameter;
