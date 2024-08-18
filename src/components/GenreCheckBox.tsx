'use client';

import { useState } from 'react';

type MusicGenresType = {
  [key: string]: string[];
};

const musicGenres: MusicGenresType = {
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
    'happy',
    'holidays',
    'honky-tonk',
    'industrial',
    'j-dance',
    'j-idol',
    'j-rock',
    'kids',
    'movies',
    'new-age',
    'new-release',
    'party',
    'piano',
    'pop-film',
    'post-dubstep',
    'rainy-day',
    'road-trip',
    'romance',
    'sad',
    'salsa',
    'show-tunes',
    'singer-songwriter',
    'ska',
    'sleep',
    'songwriter',
    'soul',
    'soundtracks',
    'study',
    'summer',
    'work-out',
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
  const [selectedCategory, setSelectedCategory] =
    useState<string>('thematic_use_cases');

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Genres</h2>

      {/* 選択中のジャンルを表示するセクション */}
      {selectedGenres.length > 0 && (
        <div className="mb-6 p-4 bg-blue-100 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-2">Selected Genres</h3>
          <div className="flex flex-wrap gap-2">
            {selectedGenres.map((genre) => (
              <div
                key={genre}
                className="flex items-center space-x-2 p-2 bg-white border border-gray-300 rounded-lg"
              >
                <span>{genre}</span>
                <button
                  onClick={() => handleGenreRemove(genre)}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* カテゴリードロップダウンセクション */}
      <div className="mb-6">
        <label htmlFor="category" className="text-lg font-medium">
          Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="ml-2 p-2 border border-gray-300 rounded-lg"
        >
          {Object.keys(musicGenres).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* 選択されたカテゴリー内のジャンルを表示するセクション */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-medium mb-2 capitalize">
          {selectedCategory}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {musicGenres[selectedCategory].map((genre) => (
            <div
              key={genre}
              className="flex items-center space-x-2 p-2 border border-gray-300 rounded-lg"
            >
              <input
                type="checkbox"
                id={genre}
                name={genre}
                value={genre}
                disabled={
                  selectedGenres.length >= 5 && !selectedGenres.includes(genre)
                }
                checked={selectedGenres.includes(genre)}
                onChange={() => handleGenreChange(genre)}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <label htmlFor={genre} className="text-lg">
                {genre}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenreCheckBox;
