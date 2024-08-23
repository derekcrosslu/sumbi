import React from 'react';

type ChartProps = {
  title: string;
  amount: number;
  data: any[];
  ratio: string;
};

export default function Chart({ title, amount, data, ratio }: ChartProps) {
  return (
    <div className={` bg-white p-4 rounded-lg shadow ${ratio}`}>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <span className='text-gray-500'>{amount}</span>
      </div>
      <div className='h-64 bg-gray-100'>
        {/* Placeholder for chart */}
        <p className='text-center py-24'>Chart goes here</p>
      </div>
    </div>
  );
}
