'use client';

import React from 'react';
import { SpotifyAudioFeatures } from '@/types';

type SampleAudioFeaturesInfoProps = {
  audioFeatures: SpotifyAudioFeatures | undefined;
};

const trackKeys = [
  'C',
  'C#/D♭',
  'D',
  'D#/E♭',
  'E',
  'F',
  'F#/G♭',
  'G',
  'G#/A♭',
  'A',
  'A#/B♭',
  'B',
];
const convertTrackKey = (key: number | undefined) =>
  key !== undefined ? trackKeys[key] : 'unknown';

const convertTrackMode = (mode: number | undefined) =>
  mode === 1 ? 'major' : 'minor';

const SampleAudioFeaturesInfo: React.FC<SampleAudioFeaturesInfoProps> = ({
  audioFeatures,
}) => {
  return (
    <div className="rounded-xl bg-gray-300 bg-opacity-50 p-3 font-mono shadow-xl">
      <h3 className="text-center text-lg font-semibold text-gray-100 mb-4">
        Track Info
      </h3>
      <ul className="list-none">
        <li className="mb-2">
          <span className="text-gray-100">Key: </span>
          <span className="text-gray-400">
            {convertTrackKey(audioFeatures?.key)}
          </span>
        </li>

        <li className="mb-2">
          <span className="text-gray-100">Mode: </span>
          <span className="text-gray-400">
            {convertTrackMode(audioFeatures?.mode)}
          </span>
        </li>

        <li>
          <span className="text-gray-100">Tempo: </span>
          <span className="text-gray-400">
            {Math.floor(Number(audioFeatures?.tempo))}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SampleAudioFeaturesInfo;
