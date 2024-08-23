import React from 'react';
import { useStore } from '../store/store';

type Props = {};

const ClientInfoTable = () => {
  const { importedData } = useStore();
  console.log('importedData table: ', importedData);
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
            {/* <th className='border p-2 whitespace-nowrap'>
              PERIODOS FACTURADOS
            </th> */}
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
          {importedData.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              {/* <td className='border p-2 whitespace-nowrap'>{row.nombre}</td> */}
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

              {/* <td className='border p-2 whitespace-nowrap'>
                {row.periodosFacturados}
              </td> */}
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
  );
};

export default ClientInfoTable;
