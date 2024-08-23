import React, { useState, useMemo } from 'react';
import { useStore } from '../store/store';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 10;

export const Facturas: React.FC = () => {
  const { facturas, getFamiliaById, getEscalasByFamiliaId } = useStore();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(facturas.length / ITEMS_PER_PAGE);

  const currentFacturas = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return facturas.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [facturas, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Facturas</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b'>ID</th>
              <th className='py-2 px-4 border-b'>Familia</th>
              <th className='py-2 px-4 border-b'>Numero de Factura</th>
              <th className='py-2 px-4 border-b'>Monto</th>
              <th className='py-2 px-4 border-b'>Fecha de Factura</th>
              <th className='py-2 px-4 border-b'>Escala</th>
              <th className='py-2 px-4 border-b'>Estado</th>
            </tr>
          </thead>
          <tbody>
            {currentFacturas.map((factura) => {
              const familia = getFamiliaById(factura.familia_id);
              const escala = getEscalasByFamiliaId(factura.familia_id);
              return (
                <tr key={factura.id}>
                  <td className='py-2 px-4 border-b'>{factura.id}</td>
                  <td className='py-2 px-4 border-b'>
                    {familia?.apellido_familia}
                  </td>
                  <td className='py-2 px-4 border-b'>
                    {factura.numero_factura}
                  </td>
                  <td className='py-2 px-4 border-b'>
                    S/.{factura.monto.toFixed(2)}
                  </td>
                  <td className='py-2 px-4 border-b'>
                    {new Date(factura.fecha_factura).toLocaleDateString()}
                  </td>
                  <td className='py-2 px-4 border-b'>{escala}</td>
                  <td className='py-2 px-4 border-b'>{factura.estado}</td>
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

export default Facturas;
