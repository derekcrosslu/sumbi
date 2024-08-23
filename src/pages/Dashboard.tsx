import React from 'react';
import { useStore } from '../store/store';

import Card from '../components/Card';
import Chart from '../components/Chart';
import EscalasChart from '../components/EscalasChart';
import Table from '../components/Table';

export const Dashboard: React.FC = () => {
  const { familias, pagos, facturas, getEscalasByFamiliaId } = useStore();

  const totalRevenue = Math.round(
    pagos.reduce((sum, pago) => sum + pago.monto, 0)
  );
  const outstandingPayments = Math.round(
    familias.reduce((sum, familia) => sum + familia.deuda_total, 0)
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

  // Calculate sums for each payment status and round the values
  const sumPagosCompletados = Math.round(
    pagos
      .filter((pago) => pago.estado === 'Completado')
      .reduce((sum, pago) => sum + pago.monto, 0)
  );
  const sumPagosPendientes = Math.round(
    pagos
      .filter((pago) => pago.estado === 'Pendiente')
      .reduce((sum, pago) => sum + pago.monto, 0)
  );
  const sumErrorPagos = Math.round(
    pagos
      .filter((pago) => pago.estado === 'Error')
      .reduce((sum, pago) => sum + pago.monto, 0)
  );

  const sumEscalaA = Math.round(
    facturas
      .filter((factura) => getEscalasByFamiliaId(factura.familia_id) === 'A')
      .reduce((sum, factura) => sum + factura.monto, 0)
  );
  const sumEscalaB = Math.round(
    facturas
      .filter((factura) => getEscalasByFamiliaId(factura.familia_id) === 'B')
      .reduce((sum, factura) => sum + factura.monto, 0)
  );
  const sumEscalaC = Math.round(
    facturas
      .filter((factura) => getEscalasByFamiliaId(factura.familia_id) === 'C')
      .reduce((sum, factura) => sum + factura.monto, 0)
  );

  const sumEscalaD = Math.round(
    facturas
      .filter((factura) => getEscalasByFamiliaId(factura.familia_id) === 'D')
      .reduce((sum, factura) => sum + factura.monto, 0)
  );

  const sumEscalaE = Math.round(
    facturas
      .filter((factura) => getEscalasByFamiliaId(factura.familia_id) === 'E')
      .reduce((sum, factura) => sum + factura.monto, 0)
  );

  const chartDataEscalas = [
    { name: 'Escala A', value: sumEscalaA },
    { name: 'Escala B', value: sumEscalaB },
    { name: 'Escala C', value: sumEscalaC },
    { name: 'Escala D', value: sumEscalaD },
    { name: 'Escala E', value: sumEscalaE },
  ];

  const chartData = [
    { name: 'Completados', value: sumPagosCompletados },
    { name: 'Pendientes', value: sumPagosPendientes },
    { name: 'Error', value: sumErrorPagos },
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
          title={'Estado de Pagos'}
          data={chartData}
          ratio={'col-span-2'}
        />
        <EscalasChart
          title={'Escalas'}
          data={chartDataEscalas}
          ratio={'col-span-1'}
        />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};
