'use client';

import { useState } from 'react';
import SelectedGenres from './SelectedGenres';
import CategoryDropdown from './CategoryDropdown';
import GenreList from './GenreList';

type MusicGenresType = {
  [key: string]: string[];
};

const musicGenres: MusicGenresType = {
  mood: [
    'happy',
    'sad',
    'party',
    'rainy-day',
    'road-trip',
    'romance',
    'sleep',
    'study',
    'summer',
    'work-out',
  ],
  thematic_use_cases: [
    'anime',
    'british',
    'chill',
    'club',
    'comedy',
    'dance',
    'dancehall',
    'disney',
    'emo',
    'groove',
    'guitar',
    'holidays',
    'honky-tonk',
    'industrial',
    'j-dance',
    'kids',
    'movies',
    'new-age',
    'new-release',
    'piano',
    'pop-film',
    'post-dubstep',
    'salsa',
    'show-tunes',
    'singer-songwriter',
    'ska',
    'songwriter',
    'soul',
    'soundtracks',
  ],
  rock: [
    'alt-rock',
    'alternative',
    'black-metal',
    'blues',
    'grunge',
    'hard-rock',
    'hardcore',
    'heavy-metal',
    'j-rock',
    'metal',
    'metalcore',
    'punk',
    'punk-rock',
    'psych-rock',
    'rock',
    'rock-n-roll',
  ],
  electronic: [
    'ambient',
    'breakbeat',
    'chicago-house',
    'deep-house',
    'detroit-techno',
    'disco',
    'drum-and-bass',
    'dub',
    'dubstep',
    'edm',
    'electro',
    'electronic',
    'garage',
    'house',
    'idm',
    'minimal-techno',
    'progressive-house',
    'techno',
    'trance',
    'trip-hop',
  ],
  pop: [
    'indie',
    'indie-pop',
    'j-idol',
    'j-pop',
    'k-pop',
    'pop',
    'power-pop',
    'synth-pop',
  ],
  hiphop_rnb: ['hip-hop', 'r-n-b', 'reggaeton'],
  classical_traditional: [
    'bluegrass',
    'blues',
    'bossanova',
    'classical',
    'country',
    'folk',
    'gospel',
    'jazz',
    'opera',
  ],
  world_music: [
    'afrobeat',
    'brazil',
    'cantopop',
    'french',
    'german',
    'indian',
    'iranian',
    'latin',
    'latino',
    'malay',
    'mandopop',
    'mpb',
    'pagode',
    'philippines-opm',
    'samba',
    'sertanejo',
    'spanish',
    'swedish',
    'tango',
    'turkish',
    'world-music',
  ],
};

type GenreCheckBoxProps = {
  selectedGenres: string[];
  handleGenreChange: (genre: string) => void;
  handleGenreRemove: (genre: string) => void;
};

const GenreCheckBox: React.FC<GenreCheckBoxProps> = ({
  selectedGenres,
  handleGenreChange,
  handleGenreRemove,
}) => {
  // 初回は"mood"に設定
  const [selectedCategory, setSelectedCategory] = useState<string>('mood');

  return (
    <div className=" p-6 bg-gray-900 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-200">Genres</h2>
      <div className="">
        {/* Selected Genres */}
        <SelectedGenres
          selectedGenres={selectedGenres}
          handleGenreRemove={handleGenreRemove}
        />
        {/* CategoryDropdown */}
        <CategoryDropdown
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          musicGenres={musicGenres}
        />
        {/* Genre List */}
        <GenreList
          selectedCategory={selectedCategory}
          selectedGenres={selectedGenres}
          handleGenreChange={handleGenreChange}
          musicGenres={musicGenres}
        />
      </div>
    </div>
  );
};

export default GenreCheckBox;
