'use client';

import { useEffect, useState } from 'react';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const isUserLoggedIn = document.cookie
        .split(';')
        .some((item) => item.trim().startsWith('spotify-access-token='));
      setIsLoggedIn(isUserLoggedIn);
    };
    checkLoginStatus();
  }, []);
  return (
    <>
      {!isLoggedIn && (
        <button className='bg-blue-500 rounded-xl text-white p-2 m-2'>
          <a href='./api/spotify/auth/login'>Login</a>
        </button>
      )}

      <button>
        <a
          className='bg-red-500 rounded-xl text-white p-2 m-2'
          href='./api/spotify/auth/logout'
        >
          Logout
        </a>
      </button>
    </>
  );
};

export default Login;
