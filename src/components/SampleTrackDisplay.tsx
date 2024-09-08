'use client';

import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import AudioFeaturesParameter from './AudioFeaturesParameter';
import SampleAudioFeaturesInfo from './SampleAudioFeaturesInfo';
import * as sample from '@/sample/sampleTracks';

type SampleTrackDisplayProps = {
  sampleTracks: sample.SampleTracks[];
};

const getRandomTrack = (tracks: sample.SampleTracks[]) => {
  const randomIndex = Math.floor(Math.random() * tracks.length);
  return tracks[randomIndex];
};

const SampleTrackDisplay: React.FC<SampleTrackDisplayProps> = ({
  sampleTracks,
}) => {
  const [track, setTrack] = useState<sample.SampleTracks | undefined>(
    undefined
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  const details = track?.details[0];
  const audioFeatures = track?.audioFeatures[0];

  useEffect(() => {
    if (containerRef.current) {
      const switchTrack = () => {
        anime({
          targets: containerRef.current,
          opacity: [1, 0],
          duration: 1000,
          easing: 'easeInOutQuad',
          complete: () => {
            const randomTrack = getRandomTrack(sampleTracks);
            setTrack(randomTrack);

            anime({
              targets: containerRef.current,
              opacity: [0, 1],
              duration: 1000,
              easing: 'easeInOutQuad',
            });
          },
        });
      };

      switchTrack();

      const intervalId = setInterval(switchTrack, 10000);

      return () => clearInterval(intervalId);
    }
  }, [sampleTracks]);

  return (
    <div
      ref={containerRef}
      className="w-full h-fit mx-auto  rounded-lg bg-gray-900 p-2 flex flex-col justify-center shadow-lg"
    >
      <h3 className="text-center font-semibold leading-6 text-gray-200 p-3">
        Example Track
      </h3>
      {track ? (
        <div className="flex">
          {/* 左側: トラックの詳細 */}
          <div className=" w-1/2 text-center m-2 p-2">
            <img
              className="shadow-xl rounded-xl mb-4"
              src={details?.image}
              alt="Album cover"
            />
            <h3 className="font-bold text-gray-300 text-xl mb-1">
              {details?.track}
            </h3>
            <p className="text-gray-500 mb-4">{details?.artist}</p>
            <SampleAudioFeaturesInfo audioFeatures={audioFeatures} />
          </div>
          {/* 右側: パラメーター部分*/}
          <div className="w-1/2 m-2 p-2">
            <AudioFeaturesParameter audioFeatures={audioFeatures} />
          </div>
        </div>
      ) : (
        <>
          <p className="text-gray-500 text-center m-2">
            No track in target track
          </p>
          <p className="text-gray-500 text-center font-bold m-2">
            please, Recommendations track image to tap!
          </p>
        </>
      )}
    </div>
  );
};

export default SampleTrackDisplay;
