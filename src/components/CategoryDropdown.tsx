'use client';

import React from 'react';

type CategoryDropdownProps = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  musicGenres: { [key: string]: string[] };
};

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
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

export default CategoryDropdown;
