'use client';

import React from 'react';

type GenreListProps = {
  selectedCategory: string;
  selectedGenres: string[];
  handleGenreChange: (genre: string) => void;
  musicGenres: { [key: string]: string[] };
};

const GenreList: React.FC<GenreListProps> = ({
  selectedCategory,
  selectedGenres,
  handleGenreChange,
  musicGenres,
}) => (
  <div className="flex-1 p-4 bg-gray-700 rounded-lg shadow-md">
    <div className="h-64 overflow-y-auto">
      <div className="flex flex-wrap gap-4">
        {musicGenres[selectedCategory].map((genre) => (
          <div
            key={genre}
            className="flex items-center space-x-2 p-2 bg-gray-100 border border-gray-300 rounded-lg"
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

export default GenreList;
