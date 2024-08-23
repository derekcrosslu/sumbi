import React from 'react';

type Props = {};

const ClientInfoTable = () => {
  const data = [
    {
      nombre: 'LIA GAVANCHO CHILINGANO',
      codigo: '93508619',
      concepto: 'FEBRERO',
      fechaVencimiento: '2/6/2024',
      fechaBloqueo: '12/31/2030',
      importeMax: '590.00',
      importeMin: '590.00',
    },
    {
      nombre: 'EIKER JOSE LUIS ALVA ROMANI',
      codigo: '93057545',
      concepto: 'FEBRERO',
      fechaVencimiento: '2/6/2024',
      fechaBloqueo: '12/31/2030',
      importeMax: '590.00',
      importeMin: '590.00',
    },
    {
      nombre: 'NOAH FABIAN BARRIOS GUTIERREZ',
      codigo: '93147623',
      concepto: 'FEBRERO',
      fechaVencimiento: '2/6/2024',
      fechaBloqueo: '12/31/2030',
      importeMax: '770.00',
      importeMin: '770.00',
    },
    {
      nombre: 'AMIRA HASSAN RIVERA VIERA',
      codigo: '93185891',
      concepto: 'FEBRERO',
      fechaVencimiento: '2/6/2024',
      fechaBloqueo: '12/31/2030',
      importeMax: '590.00',
      importeMin: '590.00',
    },
  ];

  return (
    <div className='container mx-auto p-4 overflow-x-auto'>
      <table className='w-max border-collapse'>
        <thead>
          <tr className='bg-blue-500 text-white'>
            <th className='border p-2 whitespace-nowrap'>
              NOMBRE CLIENTE (30)
            </th>
            <th className='border p-2 whitespace-nowrap'>CODIGO</th>
            <th className='border p-2 whitespace-nowrap'>CONCEPTO</th>
            <th className='border p-2 whitespace-nowrap'>FECHA VENCIMIENTO</th>
            <th className='border p-2 whitespace-nowrap'>FECHA BLOQUEO</th>
            <th className='border p-2 whitespace-nowrap'>
              PERIODOS FACTURADOS
            </th>
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
            <th className='border p-2 whitespace-nowrap'>NUMERO CTA.CLIENTE</th>
            <th className='border p-2 whitespace-nowrap'>
              TIPO IDENTIFICACION
            </th>
            <th className='border p-2 whitespace-nowrap'>NRO IDENTIFICACION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className='border p-2 whitespace-nowrap'>{row.nombre}</td>
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
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'>{row.importeMax}</td>
              <td className='border p-2 whitespace-nowrap'>{row.importeMin}</td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
              <td className='border p-2 whitespace-nowrap'></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientInfoTable;
