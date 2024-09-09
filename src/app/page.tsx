import React from 'react';
import Login from '@/components/Login';
import SampleTrackDisplay from '@/components/SampleTrackDisplay';
import TrackDisplay from '@/components/TrackDisplay';
import { data } from '@/sample/sampleTracks';

export default function Home() {
  return (
    <>
      <div className="bg-gray-700 p-10">
        <SampleTrackDisplay sampleTracks={data} />
        <div className="flex justify-center">
          <Login />
        </div>
      </div>
    </>
  );
}
