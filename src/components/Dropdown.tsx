import React from 'react';

type DropdownProps = {
  title: string;
  children: React.ReactNode;
  selectedCategory: string;
  musicGenres: { [key: string]: string[] };
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const Dropdown: React.FC<DropdownProps> = ({
  selectedCategory,
  setSelectedCategory,
  musicGenres,
  title,
  children,
}) => (
  <div className="flex-1 mb-6">
    <label htmlFor="title" className="text-lg text-gray-200 font-medium">
      {/* title */}
      {title}
    </label>
    {/* childrenで */}
    <select
      id="title.props"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="ml-2 p-2 border border-gray-300 rounded-lg"
    >
      {/* childrenで */}
      {musicGenres[selectedCategory].map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;

/*
const Dropdown: React.FC<DropdownProps> = ({
  selectedCategory,
  setSelectedCategory,
  musicGenres,
}) => (
  <div className="flex-1 mb-6">
    <label htmlFor="category" className="text-lg text-gray-200 font-medium">
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
);
 */
