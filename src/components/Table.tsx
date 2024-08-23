import React from 'react';
import { MoreVertical } from 'lucide-react';
import { useStore } from '../store/store';

type Props = {};

const Table = (props: Props) => {
  const { familias, pagos } = useStore();
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
            <thead className='bg-gray-50'>
              <tr>
                <th className='text-left p-4'>Codigo</th>
                <th className='text-left p-4'>Familia</th>
                <th className='text-left p-4'>Fecha</th>
                <th className='text-left p-4'>Monto</th>
                <th className='text-left p-4'>Estado</th>
              </tr>
            </thead>
            <tbody>
              {pagos.map((pago) => {
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
        </div>
        <div className='bg-white rounded-lg shadow'>
          <div className='p-4 border-b flex justify-between items-center'>
            <h3 className='text-lg font-semibold'>Familias notificadas</h3>
            <button>
              <MoreVertical size={20} />
            </button>
          </div>
          <ul className='p-4'>
            <li className='flex items-center justify-between mb-4'>
              <div className='flex items-center'>
                <img
                  src='/api/placeholder/32/32'
                  alt='Uchiha Itachi'
                  className='w-8 h-8 rounded-full mr-3'
                />
                <div>
                  <p className='font-semibold'>Uchiha Itachi</p>
                  <p className='text-sm text-gray-500'>Jat nou</p>
                </div>
              </div>
              <span className='text-sm text-gray-500'>INV-054-2856789</span>
            </li>
            <li className='flex items-center justify-between mb-4'>
              <div className='flex items-center'>
                <img
                  src='/api/placeholder/32/32'
                  alt='Haruno Sakura'
                  className='w-8 h-8 rounded-full mr-3'
                />
                <div>
                  <p className='font-semibold'>Haruno Sakura</p>
                  <p className='text-sm text-gray-500'>15 minzas ago</p>
                </div>
              </div>
              <span className='text-sm text-gray-500'>INV-024-3426789</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Table;
