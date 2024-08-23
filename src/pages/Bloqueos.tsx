import React, { useState, useMemo } from 'react';
import { useStore } from '../store/store';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 5;

export const Bloqueos: React.FC = () => {
  const { bloqueos, getFamiliaById } = useStore();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(bloqueos.length / ITEMS_PER_PAGE);

  const currentBloqueos = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return bloqueos.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [bloqueos, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Bloqueos</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b'>ID</th>
              <th className='py-2 px-4 border-b'>Familia</th>
              <th className='py-2 px-4 border-b'>Fecha de Inicio</th>
              <th className='py-2 px-4 border-b'>Fecha de Fin</th>
              <th className='py-2 px-4 border-b'>Motivo</th>
              <th className='py-2 px-4 border-b'>Estado</th>
            </tr>
          </thead>
          <tbody>
            {currentBloqueos.map((bloqueo) => {
              const familia = getFamiliaById(bloqueo.familia_id);
              return (
                <tr key={bloqueo.id}>
                  <td className='py-2 px-4 border-b'>{bloqueo.id}</td>
                  <td className='py-2 px-4 border-b'>
                    {familia?.apellido_familia}
                  </td>
                  <td className='py-2 px-4 border-b'>
                    {new Date(bloqueo.fecha_inicio).toLocaleDateString()}
                  </td>
                  <td className='py-2 px-4 border-b'>
                    {bloqueo.fecha_fin
                      ? new Date(bloqueo.fecha_fin).toLocaleDateString()
                      : 'N/A'}
                  </td>
                  <td className='py-2 px-4 border-b'>{bloqueo.motivo}</td>
                  <td className='py-2 px-4 border-b'>{bloqueo.estado}</td>
                </tr>
              );
            })}
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

export default Bloqueos;
