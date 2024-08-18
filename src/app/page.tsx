import React from 'react';
import TestApi from '../components/TestApi';
import Login from '../components/Login';
import Loading from '../components/Loading';

export default function Home() {
  return (
    <>
      <Login />
      <div>
        <button className="bg-green-600 hover:bg-green-500 text-white rounded-lg w-24 h-10">
          <a href="/savedTracks">my favorite</a>
        </button>
      </div>
    </>
  );
}
