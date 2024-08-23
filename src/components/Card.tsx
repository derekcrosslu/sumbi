import React from 'react';
import { MoreVertical, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type CardProps = {
  title: string;
  amount: number;
  url: string;
};

export default function Card({ title, amount, url }: CardProps) {
  return (
    <div>
      <div className='bg-white p-4 rounded-lg shadow hover:bg-blue-600 hover:text-white'>
        <div className='flex justify-between  items-center mb-2'>
          <h2 className='text-lg font-semibold'>{title}</h2>
          <Link to={url}>
            <ArrowUpRight size={20} />
          </Link>
        </div>
        <p className='text-2xl font-bold'>S/.{amount.toFixed(2)}</p>
      </div>
    </div>
  );
}
