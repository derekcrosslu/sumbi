import React, { useState, useMemo } from 'react';
import { MoreVertical } from 'lucide-react';
import { useStore } from '../store/store';
import Pagination, { PaginationSmall } from '../components/Pagination';

const ITEMS_PER_PAGE = 3;

const Table = () => {
  const { familias, pagos, notificaciones } = useStore();
  const [currentPagosPage, setCurrentPagosPage] = useState(1);
  const [currentNotificacionesPage, setCurrentNotificacionesPage] = useState(1);

  const formatDate = (date: Date | string | null | undefined): string => {
    if (!date) return '';
    const dateObject = date instanceof Date ? date : new Date(date);
    if (isNaN(dateObject.getTime())) {
      return '';
    }
    return dateObject.toDateString();
  };

  const totalPagosPages = Math.ceil(pagos.length / ITEMS_PER_PAGE);
  const totalNotificacionesPages = Math.ceil(
    notificaciones.length / ITEMS_PER_PAGE
  );

  const currentPagos = useMemo(() => {
    const startIndex = (currentPagosPage - 1) * ITEMS_PER_PAGE;
    return pagos.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [pagos, currentPagosPage]);

  const currentNotificaciones = useMemo(() => {
    const startIndex = (currentNotificacionesPage - 1) * ITEMS_PER_PAGE;
    return notificaciones.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [notificaciones, currentNotificacionesPage]);

  return (
    <div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2 bg-white rounded-lg shadow'>
          <div className='p-4 border-b flex justify-between items-center'>
            <h3 className='text-lg font-semibold'>Pagos</h3>
            <button>
              <MoreVertical size={20} />
            </button>
          </div>
          <table className='w-full'>
            {/* <thead className='bg-gray-50'>
              <tr>
                <th className='text-left p-4'>Codigo</th>
                <th className='text-left p-4'>Familia</th>
                <th className='text-left p-4'>Fecha</th>
                <th className='text-left p-4'>Monto</th>
                <th className='text-left p-4'>Estado</th>
              </tr>
            </thead> */}
            <tbody>
              {currentPagos.map((pago) => {
                const familia = familias.find(
                  (familia) => familia.id === pago.familia_id
                );
                return (
                  <tr key={pago.id}>
                    <td className='p-4'>{pago.id}</td>
                    <td className='p-4'>{familia?.apellido_familia}</td>
                    <td className='p-4'>
                      {new Date(pago.fecha_pago).toLocaleDateString()}
                    </td>
                    <td className='p-4'>${pago.monto.toFixed(2)}</td>
                    <td className='p-4'>{pago.estado}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className='p-4'>
            <Pagination
              currentPage={currentPagosPage}
              totalPages={totalPagosPages}
              onPageChange={setCurrentPagosPage}
            />
          </div>
        </div>
        <div className='bg-white rounded-lg shadow'>
          <div className='p-4 border-b flex justify-between items-center'>
            <h3 className='text-lg font-semibold'>Familias notificadas</h3>
            <button>
              <MoreVertical size={20} />
            </button>
          </div>
          <ul className='p-4'>
            {currentNotificaciones.map((notificacion) => {
              const familia = familias.find(
                (familia) => familia.id === notificacion.familia_id
              );

              return (
                <li
                  className='flex items-center justify-between mb-4'
                  key={notificacion.id}
                >
                  <div className='flex items-center'>
                    <div>
                      <p className='font-semibold'>
                        {familia?.apellido_familia}
                      </p>
                      <p className='text-sm text-gray-500'>
                        {formatDate(notificacion.fecha_envio)}
                      </p>
                    </div>
                  </div>
                  <span className='text-sm text-gray-500'>
                    {notificacion.estado}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className='p-1'>
            <PaginationSmall
              currentPage={currentNotificacionesPage}
              totalPages={totalNotificacionesPages}
              onPageChange={setCurrentNotificacionesPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
