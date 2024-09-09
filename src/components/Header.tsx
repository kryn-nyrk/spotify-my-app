'use client';

import { useRef, useEffect } from 'react';
import ProfileDisplay from './ProfileDisplay';
import { typingAnimation } from '@/animations';

const Header = () => {
  const typingRef = useRef<HTMLHeadingElement>(null);
  const text = 'Parameter with Spotify Audio Features';

  useEffect(() => {
    if (typingRef.current) {
      typingAnimation(typingRef.current, text, 3000);
    }
  }, [typingRef]);

  return (
    <>
      <h1
        ref={typingRef}
        className="text-center text-gray-100 text-lg font-bold p-3"
      ></h1>
      <div className="flex items-center justify-start p-4">
        <ProfileDisplay />
      </div>
    </>
  );
};

export default Header;
