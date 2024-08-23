import React from 'react';
import { useStore } from '../store/store';

export const Pagos: React.FC = () => {
  const { pagos, getFamiliaById } = useStore();

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Pagos</h1>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b'>ID</th>
            <th className='py-2 px-4 border-b'>Familia</th>
            <th className='py-2 px-4 border-b'>Monto</th>
            <th className='py-2 px-4 border-b'>Fecha de Pago</th>
            <th className='py-2 px-4 border-b'>Método de Pago</th>
            <th className='py-2 px-4 border-b'>Estado</th>
          </tr>
        </thead>
        <tbody>
          {pagos.map((pago) => {
            const familia = getFamiliaById(pago.familia_id);
            return (
              <tr key={pago.id}>
                <td className='py-2 px-4 border-b'>{pago.id}</td>
                <td className='py-2 px-4 border-b'>
                  {familia?.apellido_familia}
                </td>
                <td className='py-2 px-4 border-b'>
                  S/.{pago.monto.toFixed(2)}
                </td>
                <td className='py-2 px-4 border-b'>
                  {new Date(pago.fecha_pago).toLocaleDateString()}
                </td>
                <td className='py-2 px-4 border-b'>{pago.metodo_pago}</td>
                <td className='py-2 px-4 border-b'>{pago.estado}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
