import React from 'react';

type SelectedGenresProps = {
  selectedGenres: string[];
  handleGenreRemove: (genre: string) => void;
};

const SelectedGenres: React.FC<SelectedGenresProps> = ({
  selectedGenres,
  handleGenreRemove,
}) => (
  <div className="flex-1 mb-6 p-4 bg-gray-700 rounded-lg shadow-md h-fit">
    <h3 className="text-xl font-medium mb-2 text-gray-200">Selected Genres</h3>
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
);

export default SelectedGenres;
