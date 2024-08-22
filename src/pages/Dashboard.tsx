import React from 'react';
import { useStore } from '../store/store';

export const Dashboard: React.FC = () => {
  const { familias, pagos } = useStore();

  const totalRevenue = pagos.reduce((sum, pago) => sum + pago.monto, 0);
  const outstandingPayments = familias.reduce((sum, familia) => sum + familia.deuda_total, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Total Revenue</h2>
          <p className="text-2xl">${totalRevenue.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Outstanding Payments</h2>
          <p className="text-2xl">${outstandingPayments.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Active Families</h2>
          <p className="text-2xl">{familias.length}</p>
        </div>
      </div>
    </div>
  );
};