import React from 'react';
import { useStore } from '../store/store';

import Card from '../components/Card';
import Chart from '../components/Chart';
import Table from '../components/Table';

export const Dashboard: React.FC = () => {
  const { familias, pagos } = useStore();

  const totalRevenue = pagos.reduce((sum, pago) => sum + pago.monto, 0);
  const outstandingPayments = familias.reduce(
    (sum, familia) => sum + familia.deuda_total,
    0
  );

  const cards = [
    {
      title: 'Ingresos',
      value: totalRevenue,
      url: '/pagos',
    },
    {
      title: 'Facturas',
      value: outstandingPayments,
      url: '/familias',
    },
    {
      title: 'Notificados',
      value: familias.length,
      url: '/notificaciones',
    },
    {
      title: 'Bloqueados',
      value: familias.length,
      url: '/bloqueos',
    },
  ];

  return (
    <div className='flex flex-col w-full h-screen'>
      <div className='grid  md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
        {cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            amount={card.value}
            url={card.url}
          />
        ))}
      </div>
      <div className='grid grid-cols-3 mb-8 gap-4'>
        <Chart
          title={'Pagos'}
          amount={10000}
          data={[]}
          ratio={'col-span-2'}
        />
        <Chart
          title={'Escalas'}
          amount={10000}
          data={[]}
          ratio={'col-span-1'}
        />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};
