import React from 'react';
import { useStore } from '../store/store';

export const Familias: React.FC = () => {
  const { familias } = useStore();

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Familias</h1>
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
          {familias.map((familia) => (
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
  );
};
