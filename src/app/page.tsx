'use client';

import { useState, useEffect, FC } from 'react';
import { useProfile } from './hooks/useProfile';
import { useSavedTracks } from './hooks/useSavedTracks';
import { useSearchTracks } from './hooks/useSearchTracks';
import { useAudioFeature } from './hooks/useAudioFeature';
import Login from './components/Login';
import ProfileDisplay from './components/ProfileDisplay';
import SearchTrackList from './components/SearchTrackList';
import SavedTrackList from './components/SavedTrackList';
import SelectTrackDisplay from './components/SelectTrackDisplay';
import Modal from './components/Modal';
import { SpotifyTrack } from './types';

export default function Home() {
  const { profile } = useProfile();

  const {
    savedTracks,
    savedLimit,
    setSavedLimit,
    savedOffset,
    setSavedOffset,
  } = useSavedTracks();

  const {
    searchLimit,
    setSearchLimit,
    searchOffset,
    setSearchOffset,
    searchQuery,
    setSearchQuery,
    searchTracks,
  } = useSearchTracks();

  const [selectedTrack, setSelectedTrack] = useState<SpotifyTrack | undefined>(
    undefined,
  );
  const { audioFeature, setAudioFeature } = useAudioFeature(selectedTrack?.id);

  /* モードチェンジのステートと切り替え関数 */
  const [isModeClick, setIsModeClick] = useState(false);

  const modeChange = () => {
    setIsModeClick(!isModeClick);
  };

  return (
    <>
      <h2>spotify audio feature</h2>
      <Login />
      <ProfileDisplay profile={profile} />
      <div>
        {audioFeature && selectedTrack ? (
          <SelectTrackDisplay
            track={selectedTrack}
            audioFeature={audioFeature}
          />
        ) : (
          <p>トラックが未選択です。</p>
        )}
        <button
          className={`rounded-xl text-white p-2 m-2 ${isModeClick ? 'bg-orange-500' : 'bg-cyan-500'}`}
          onClick={modeChange}
        >
          {isModeClick ? 'search track' : 'saved track'}
        </button>
        {isModeClick ? (
          <SavedTrackList
            limit={savedLimit}
            setLimit={setSavedLimit}
            offset={savedOffset}
            setOffset={setSavedOffset}
            tracks={savedTracks}
            selectedTrack={selectedTrack}
            setSelectedTrack={setSelectedTrack}
          />
        ) : (
          <SearchTrackList
            limit={searchLimit}
            setLimit={setSearchLimit}
            offset={searchOffset}
            setOffset={setSearchOffset}
            query={searchQuery}
            setQuery={setSearchQuery}
            tracks={searchTracks}
          />
        )}
      </div>
    </>
  );
}
