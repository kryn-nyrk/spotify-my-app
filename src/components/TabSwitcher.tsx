'use client';

import React, { useState } from 'react';

type TabSwitcherProps = {
  recommendationsTab: React.ReactNode;
  playlistTab: React.ReactNode;
};

const TabSwitcher: React.FC<TabSwitcherProps> = ({
  recommendationsTab,
  playlistTab,
}) => {
  const [activeTab, setActiveTab] = useState<'recommendations' | 'playlist'>(
    'recommendations'
  );

  return (
    <div>
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === 'recommendations'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('recommendations')}
        >
          Recommendations
        </button>
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === 'playlist'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('playlist')}
        >
          Your Playlist
        </button>
      </div>
      <div className="mt-5">
        {activeTab === 'recommendations' ? recommendationsTab : playlistTab}
      </div>
    </div>
  );
};

export default TabSwitcher;
