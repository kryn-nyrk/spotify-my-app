'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAudioFeatures } from '@/hooks/useAudioFeatures';
import { useRecommendations } from '@/hooks/useRecommendations';
import { useCreatePlaylist } from '@/hooks/useCreatePlaylist';
import GenreCheckBox from '@/components/GenreCheckBox';
import RecommendationsTrackList from '@/components/RecommendationsTrackList';
import TabSwitcher from '@/components/TabSwitcher';
import TrackDisplay from '@/components/TrackDisplay';
import PlaylistCreator from '@/components/PlaylistCreator';
import { SpotifyTrackDisplay } from '@/types';

const RecommendationsPage = () => {
  const params = useSearchParams();
  const trackId = params.get('trackId');
  const trackName = params.get('trackName');
  const trackArtist = params.get('trackArtist');
  const trackImage = params.get('trackImage');

  const { audioFeatures } = useAudioFeatures(trackId as string);

  const trackDisplay: SpotifyTrackDisplay = {
    name: trackName as string,
    artist: trackArtist as string,
    image: trackImage as string,
    audioFeatures,
  };

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const handleGenreChange = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleGenreRemove = (genre: string) => {
    setSelectedGenres((prev) => prev.filter((g) => g !== genre));
  };

  const {
    recommendationsTracks,
    isLoading,
    targetTrackDisplay,
    onTargetTrackDisplay,
  } = useRecommendations([trackId as string], selectedGenres);

  const { playlist, addToPlaylist, removeFromPlaylist, createPlaylist } =
    useCreatePlaylist();

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
