import React from 'react';

type PaginationControlsProps = {
  onPrevPage: () => void;
  onNextPage: () => void;
  setOffset: (offset: number) => void;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  pageNumbers: number[];
  currentPage: number;
  limit: number;
};

const PaginationControls: React.FC<PaginationControlsProps> = ({
  onPrevPage,
  onNextPage,
  setOffset,
  hasPrevPage,
  hasNextPage,
  pageNumbers,
  currentPage,
  limit,
}) => {
  return (
    <div className=" bg-gray-200 bg-opacity-25 rounded-lg p-3 fixed bottom-4 right-4 flex space-x-4">
      <select
        className="rounded-lg"
        value={currentPage}
        onChange={(e) => setOffset((Number(e.target.value) - 1) * limit)}
      >
        {pageNumbers.map((page) => (
          <option key={page} value={page}>
            {page}
          </option>
        ))}
      </select>
      <button
        onClick={onPrevPage}
        disabled={!hasPrevPage}
        className="bg-green-600 hover:bg-green-500 rounded-lg text-white h-10 w-16 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        prev
      </button>
      <button
        onClick={onNextPage}
        disabled={!hasNextPage}
        className="bg-green-600 hover:bg-green-500 rounded-lg text-white h-10 w-16 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        next
      </button>
    </div>
  );
};

export default PaginationControls;
