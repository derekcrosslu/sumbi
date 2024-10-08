import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className='flex justify-center items-center space-x-2 mt-4'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='px-4 py-2 border rounded-md bg-white text-gray-600 disabled:opacity-50'
      >
        Previous
      </button>
      <span className='px-4 py-2 border rounded-md bg-gray-200'>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='px-4 py-2 border rounded-md bg-white text-gray-600 disabled:opacity-50'
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

export const PaginationSmall: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className='flex justify-center items-center space-x-2 -mt-4'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='px-4 py-2 border rounded-md bg-white text-gray-600 disabled:opacity-50'
      >
        Previous
      </button>
      <span className='px-4 py-2 border rounded-md bg-gray-200'>
        {currentPage}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='px-4 py-2 border rounded-md bg-white text-gray-600 disabled:opacity-50'
      >
        Next
      </button>
    </div>
  );
};
