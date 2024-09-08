'use client';

import React, { useEffect, useRef } from 'react';
import { animateBars } from '@/animations';
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
  const barRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (barRefs.current.length > 0) {
      animateBars(barRefs.current);
    }
  }, [audioFeatures]);

  const data = [
    {
      label: 'acousticness',
      color: 'bg-amber-900',
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
      color: 'bg-blue-600',
      value: multiplyBy100(audioFeatures?.instrumentalness),
    },
    {
      label: 'liveness',
      color: 'bg-red-600',
      value: multiplyBy100(audioFeatures?.liveness),
    },
    {
      label: 'speechiness',
      color: 'bg-emerald-300',
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
      <div className=" rounded-xl bg-gray-300 bg-opacity-50 p-4 font-mono shadow-xl ">
        <h2 className="text-center text-lg text-gray-100 font-semibold">
          Features
        </h2>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <h2 className="text-xs text-gray-100 mb-1">
              {item.label}: <span className="text-gray-400">{item.value}</span>
            </h2>

            <div
              ref={(el) => {
                if (el) barRefs.current[index] = el;
              }}
              data-width={item.value}
              className={`${item.color} rounded-md text-md shadow-lg p-2 mb-2`}
              style={{ width: `0%` }}
            ></div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default AudioFeaturesParameter;
