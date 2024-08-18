'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAudioFeatures } from '@/hooks/useAudioFeatures';
import { useRecommendations } from '@/hooks/useRecommendations';
import { useCreatePlaylist } from '@/hooks/useCreatePlaylist';
import Loading from '@/components/Loading';
import GenreCheckBox from '@/components/GenreCheckBox';
import TrackCard from '@/components/TrackCard';
import SelectTrackDisplay from '@/components/SelectTrackDisplay';
import PlaylistCreator from '@/components/PlaylistCreator';
import { SpotifyTrack } from '@/types';

const RecommendationsPage = () => {
  const params = useSearchParams();
  const trackId = params.get('trackId');
  const trackName = params.get('trackName');
  const trackArtist = params.get('trackArtist');
  const trackImage = params.get('trackImage');

  const trackDetails = {
    name: trackName as string,
    artist: trackArtist as string,
    image: trackImage as string,
  };

  const { audioFeatures } = useAudioFeatures(trackId as string);

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const handleGenreChange = (genre: string) => {
    /*
    if (selectedGenres.length >= 5 && !selectedGenres.includes(genre)) {
      alert('選択できるジャンルは5つまでです。');
      return;
    }

    console.log('genre is: ', genre);
    */
    setSelectedGenres(
      (prev) =>
        prev.includes(genre)
          ? prev.filter((g) => g !== genre)
          : [...prev, genre]
      /*
      console.log('prev is: ', prev);
      const isGenreSelected = prev.includes(genre);
      console.log('isGenreSelected is: ', isGenreSelected);
      const updateGenre = isGenreSelected
        ? prev.filter((g) => g !== genre)
        : [...prev, genre];
      console.log('updateGenre is: ', updateGenre);
      return updateGenre;
      */
    );
  };

  const handleGenreRemove = (genre: string) => {
    setSelectedGenres((prev) => prev.filter((g) => g !== genre));
  };

  const { recommendationsTracks } = useRecommendations(
    [trackId as string],
    selectedGenres
  );

  const { playlist, addToPlaylist, removeFromPlaylist, createPlaylist } =
    useCreatePlaylist();

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <TrackCard
          tracks={recommendationsTracks}
          onAddToPlaylist={addToPlaylist}
        />
        <PlaylistCreator
          playlist={playlist}
          removeFromPlaylist={removeFromPlaylist}
          createPlaylist={createPlaylist}
        />
        <GenreCheckBox
          selectedGenres={selectedGenres}
          handleGenreChange={handleGenreChange}
          handleGenreRemove={handleGenreRemove}
        />
        <SelectTrackDisplay
          audioFeatures={audioFeatures}
          trackDetails={trackDetails}
        />
      </div>
    </>
  );
};

export default RecommendationsPage;
