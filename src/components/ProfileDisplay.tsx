'use client';

import { useProfile } from '@/hooks/useProfile';

const ProfileDisplay = () => {
  const { profile } = useProfile();

  return (
    <>
      {profile && (
        <div className="flex items-center p-2 m-2">
          <img
            className="rounded-full w-10 h-10 mr-3"
            src={profile?.images[0].url}
            alt="Profile"
          />
          <span className="font-semibold text-gray-200">
            {profile?.display_name}
          </span>
        </div>
      )}
    </>
  );
};

export default ProfileDisplay;
