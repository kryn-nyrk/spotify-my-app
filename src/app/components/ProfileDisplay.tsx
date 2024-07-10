'use client';

import { useEffect, useState, FC } from 'react';
import { SpotifyProfile } from '../types';

type ProfileProps = {
  profile: SpotifyProfile;
};

const ProfileDisplay: FC<ProfileProps> = ({ profile }) => {
  return (
    <>
      <div className='flex items-center p-2 m-2'>
        <img
          className='rounded-full w-10 h-10 mr-2'
          src={profile?.images[0].url}
          alt='Profile'
        />
        <span className='font-semibold'>{profile?.display_name}</span>
      </div>
    </>
  );
};

export default ProfileDisplay;
