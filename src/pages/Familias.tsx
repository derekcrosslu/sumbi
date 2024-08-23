import React, { useState, useMemo } from 'react';
import { useStore } from '../store/store';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 10;

export const Familias: React.FC = () => {
  const { familias } = useStore();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(familias.length / ITEMS_PER_PAGE);

  const currentFamilias = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return familias.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [familias, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Familias</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b'>ID</th>
              <th className='py-2 px-4 border-b'>Apellido Familia</th>
              <th className='py-2 px-4 border-b'>Nombres Madre</th>
              <th className='py-2 px-4 border-b'>Nombres Padre</th>
              <th className='py-2 px-4 border-b'>Deuda Total</th>
            </tr>
          </thead>
          <tbody>
            {currentFamilias.map((familia) => (
              <tr key={familia.id}>
                <td className='py-2 px-4 border-b'>{familia.id}</td>
                <td className='py-2 px-4 border-b'>{familia.apellido_familia}</td>
                <td className='py-2 px-4 border-b'>{familia.nombres_madre}</td>
                <td className='py-2 px-4 border-b'>{familia.nombres_padre}</td>
                <td className='py-2 px-4 border-b'>
                  S/.{familia.deuda_total.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Familias;
