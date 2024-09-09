'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useTrackData } from '@/hooks/useTrackData';
import { useGenres } from '@/hooks/useGenres';
import { useCreatePlaylist } from '@/hooks/useCreatePlaylist';
import ErrorMessage from '@/components/ErrorMessage';
import GenreCheckBox from '@/components/GenreCheckBox';
import RecommendationsTrackList from '@/components/RecommendationsTrackList';
import TabSwitcher from '@/components/TabSwitcher';
import TrackDisplay from '@/components/TrackDisplay';
import PlaylistCreator from '@/components/PlaylistCreator';

const RecommendationsPage = () => {
  const params = useSearchParams();
  const trackId = params.get('trackId');

  const { selectedGenres, handleGenreChange, handleGenreRemove } = useGenres();
  const {
    trackDisplay,
    recommendationsTracks,
    isLoading,
    targetTrackDisplay,
    onTargetTrackDisplay,
    error,
  } = useTrackData(trackId as string, selectedGenres);
  const { playlist, addToPlaylist, removeFromPlaylist, createPlaylist } =
    useCreatePlaylist();

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <div className="grid grid-rows-1 lg:grid-cols-2 md:grid-cols-1 m-10 gap-10">
        {/* 左側: RecommendationsTrackListとGenreCheckBox */}
        <div className="col-span-1 space-y-5">
          <TabSwitcher
            recommendationsTab={
              <RecommendationsTrackList
                tracks={recommendationsTracks}
                onAddToPlaylist={addToPlaylist}
                onTargetTrackDisplay={onTargetTrackDisplay}
                isLoading={isLoading}
              />
            }
            playlistTab={
              <PlaylistCreator
                playlist={playlist}
                removeFromPlaylist={removeFromPlaylist}
                createPlaylist={createPlaylist}
              />
            }
          />

          <GenreCheckBox
            selectedGenres={selectedGenres}
            handleGenreChange={handleGenreChange}
            handleGenreRemove={handleGenreRemove}
          />
        </div>

        {/* 右側: TrackDisplay */}
        <div className="col-span-1 space-y-5">
          <TrackDisplay title="Select Track" track={trackDisplay} />
          <TrackDisplay title="Target Track" track={targetTrackDisplay} />
        </div>
      </div>
    </>
  );
};

export default RecommendationsPage;
