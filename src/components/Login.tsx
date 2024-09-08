import React from 'react';
import { cookies } from 'next/headers';

const LoginButton = () => (
  <div className="mt-5">
    <button className="bg-green-600 hover:bg-green-500 text-white rounded-lg w-24 h-10">
      <a href="api/spotify/auth/login">Let's play!</a>
    </button>
  </div>
);

const Login = () => {
  const cookie = cookies();
  const token = cookie.get('spotify_access_token')?.value;

  if (token) {
    return (
      <div>
        <button className="bg-green-600 hover:bg-green-500 text-white rounded-lg w-24 h-10">
          <a href="/savedTracks">Replay</a>
        </button>
      </div>
    );
  }

  return <LoginButton />;
};

export default Login;
