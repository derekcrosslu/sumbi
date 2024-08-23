import React, { useState, useMemo } from 'react';
import { useStore } from '../store/store';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 5;

export const Notificaciones: React.FC = () => {
  const { notificaciones, getFamiliaById } = useStore();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(notificaciones.length / ITEMS_PER_PAGE);

  const currentNotificaciones = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return notificaciones.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [notificaciones, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Notificaciones</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b'>ID</th>
              <th className='py-2 px-4 border-b'>Familia</th>
              <th className='py-2 px-4 border-b'>Tipo</th>
              <th className='py-2 px-4 border-b'>Contenido</th>
              <th className='py-2 px-4 border-b'>Fecha de Envío</th>
              <th className='py-2 px-4 border-b'>Estado</th>
            </tr>
          </thead>
          <tbody>
            {currentNotificaciones.map((notificacion) => {
              const familia = getFamiliaById(notificacion.familia_id);
              return (
                <tr key={notificacion.id}>
                  <td className='py-2 px-4 border-b'>{notificacion.id}</td>
                  <td className='py-2 px-4 border-b'>
                    {familia?.apellido_familia}
                  </td>
                  <td className='py-2 px-4 border-b'>
                    {notificacion.tipo_notificacion}
                  </td>
                  <td className='py-2 px-4 border-b'>
                    {notificacion.contenido}
                  </td>
                  <td className='py-2 px-4 border-b'>
                    {new Date(notificacion.fecha_envio).toLocaleString()}
                  </td>
                  <td className='py-2 px-4 border-b'>{notificacion.estado}</td>
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

export default Notificaciones;
