import React, { useState, useMemo } from 'react';
import { useStore } from '../store/store';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 10;

const ClientInfoTable = () => {
  const { importedData } = useStore();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(importedData.length / ITEMS_PER_PAGE);

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return importedData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [importedData, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='overflow-x-auto'>
        <table className='w-max border-collapse'>
          <thead>
            <tr className='bg-blue-500 text-white'>
              <th className='border p-2 whitespace-nowrap'>
                NOMBRE CLIENTE (30)
              </th>
              <th className='border p-2 whitespace-nowrap'>CODIGO</th>
              <th className='border p-2 whitespace-nowrap'>CONCEPTO</th>
              <th className='border p-2 whitespace-nowrap'>
                FECHA VENCIMIENTO
              </th>
              <th className='border p-2 whitespace-nowrap'>FECHA BLOQUEO</th>
              <th className='border p-2 whitespace-nowrap'>
                IMPORTE MAX A COBRAR DEUDA
              </th>
              <th className='border p-2 whitespace-nowrap'>
                IMPORTE MIN A COBRAR DEUDA
              </th>
              <th className='border p-2 whitespace-nowrap bg-green-200'>
                INFORMACION ADICIONAL
              </th>
              <th className='border p-2 whitespace-nowrap bg-green-500 text-white'>
                COD. SUB CONCEPTO 01
              </th>
              <th className='border p-2 whitespace-nowrap bg-green-200'>
                VALOR SUB CONCEPTO 01
              </th>
              <th className='border p-2 whitespace-nowrap bg-blue-500'>
                COD. SUB CONCEPTO 02
              </th>
              <th className='border p-2 whitespace-nowrap bg-blue-200'>
                VALOR SUB CONCEPTO 02
              </th>
              <th className='border p-2 whitespace-nowrap bg-green-500 text-white'>
                COD. SUB CONCEPTO 03
              </th>
              <th className='border p-2 whitespace-nowrap bg-green-200'>
                VALOR SUB CONCEPTO 03
              </th>
              <th className='border p-2 whitespace-nowrap bg-blue-500'>
                COD. SUB CONCEPTO 04
              </th>
              <th className='border p-2 whitespace-nowrap bg-blue-200'>
                VALOR SUB CONCEPTO 04
              </th>
              <th className='border p-2 whitespace-nowrap bg-green-500 text-white'>
                COD. SUB CONCEPTO 05
              </th>
              <th className='border p-2 whitespace-nowrap bg-green-200'>
                VALOR SUB CONCEPTO 05
              </th>
              <th className='border p-2 whitespace-nowrap bg-blue-500'>
                COD. SUB CONCEPTO 06
              </th>
              <th className='border p-2 whitespace-nowrap bg-blue-200'>
                VALOR SUB CONCEPTO 06
              </th>
              <th className='border p-2 whitespace-nowrap bg-green-500 text-white'>
                COD. SUB CONCEPTO 07
              </th>
              <th className='border p-2 whitespace-nowrap bg-green-200'>
                VALOR SUB CONCEPTO 07
              </th>
              <th className='border p-2 whitespace-nowrap bg-blue-500'>
                COD. SUB CONCEPTO 08
              </th>
              <th className='border p-2 whitespace-nowrap bg-blue-200'>
                VALOR SUB CONCEPTO 08
              </th>
              <th className='border p-2 whitespace-nowrap'>
                NUMERO CTA.CLIENTE
              </th>
              <th className='border p-2 whitespace-nowrap'>
                TIPO IDENTIFICACION
              </th>
              <th className='border p-2 whitespace-nowrap'>
                NRO IDENTIFICACION
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                <td className='border p-2 whitespace-nowrap'>
                  {row.nombreCliente}
                </td>
                <td className='border p-2 whitespace-nowrap'>{row.codigo}</td>
                <td className='border p-2 whitespace-nowrap text-blue-600'>
                  {row.concepto}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.fechaVencimiento}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.fechaBloqueo}
                </td>
                <td className='border p-2 whitespace-nowrap text-blue-600'>
                  {row.importeMaxCobrarDeuda}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.importeMinCobrarDeuda}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.informacionAdicional}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.codSubConcepto01}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.valorSubConcepto01}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.codSubConcepto02}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.valorSubConcepto02}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.codSubConcepto03}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.valorSubConcepto03}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.codSubConcepto04}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.valorSubConcepto04}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.codSubConcepto05}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.valorSubConcepto05}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.codSubConcepto06}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.valorSubConcepto06}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.codSubConcepto07}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.valorSubConcepto07}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.codSubConcepto08}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.valorSubConcepto08}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.numeroCtaCliente}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.tipoIdentificacion}
                </td>
                <td className='border p-2 whitespace-nowrap'>
                  {row.nroIdentificacion}
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

export default ClientInfoTable;
