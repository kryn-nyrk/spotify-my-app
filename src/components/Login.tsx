import React from 'react';
import { cookies } from 'next/headers';

const LoginButton = () => (
  <button className="bg-green-600 hover:bg-green-500 text-white rounded-lg w-24 h-10">
    <a href="api/spotify/auth/login">Login</a>
  </button>
);

const LogoutButton = () => (
  <button className="bg-red-600 hover:bg-red-500 text-white rounded-lg w-24 h-10">
    Logout
  </button>
);

const Login = () => {
  const cookie = cookies();
  const token = cookie.get('spotify_access_token')?.value;

  if (token) {
    return <LogoutButton />;
  }

  return <LoginButton />;
};

export default Login;
