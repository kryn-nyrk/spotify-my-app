'use client';
import { FC } from 'react';
import { SpotifyAudioFeature, SpotifyTrack } from '../types';

type SelectTrackDisplayProps = {
  track: SpotifyTrack;
  audioFeature: SpotifyAudioFeature;
};

const SelectTrackDisplay: FC<SelectTrackDisplayProps> = ({
  track,
  audioFeature,
}) => {
  return (
    <div className='w-4/5 max-w-xs mx-auto border rounded-lg bg-gradient-to-r from-pink-200 to-yellow-200 p-7 flex flex-col justify-center shadow-lg'>
      <h3 className='text-center font-semibold leading-6 text-gray-900 p-3'>
        Select Track
      </h3>
      <img
        className='shadow-xl rounded-xl mb-4'
        src={track.album?.images[0]?.url}
        alt='Album cover'
      />
      <div className='text-center m-3 p-2'>
        <h3 className='font-bold text-gray-800 text-xl mb-1'>{track.name}</h3>
        <p className='text-gray-500 mb-4'>
          {track.artists.map((artist) => artist.name)}
        </p>
        <div className='border rounded-xl bg-white bg-opacity-30 p-3 font-mono shadow-xl '>
          <div className='m-2 bg-pink-400 bg-opacity-60 rounded-xl text-center text-lg shadow-lg p-2'>
            Danceability: {audioFeature.danceability}
          </div>
          <div className='m-2 bg-orange-400 bg-opacity-60 rounded-xl text-center text-lg shadow-lg p-2'>
            Energy: {audioFeature.energy}
          </div>
          <div className='m-2 bg-red-400 bg-opacity-60 rounded-xl text-center shadow-lg p-2'>
            Liveness: {audioFeature.liveness}
          </div>
          <div className='m-2 bg-yellow-400 bg-opacity-60 rounded-xl text-center shadow-lg p-2'>
            Loudness: {audioFeature.loudness}
          </div>
          <div className='m-2 bg-cyan-400 bg-opacity-60 rounded-xl text-center shadow-md p-2'>
            Speechiness: {audioFeature.speechiness}
          </div>
          <div className='m-2 bg-green-400 bg-opacity-60 rounded-xl text-center text-sm shadow-md p-2'>
            Instrumentalness: {audioFeature.instrumentalness}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTrackDisplay;
