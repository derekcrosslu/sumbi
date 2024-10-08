import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

type ChartProps = {
  title: string;
  data: Array<{
    name: string;
    value: number;
  }>;
  ratio: string;
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '5px', border: '1px solid #ccc' }}>
        <p className="label">{`${payload[0].name}: S/. ${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }

  return null;
};

export default function Chart({ title, data, ratio }: ChartProps) {
  return (
    <div className={`bg-white p-4 rounded-lg shadow ${ratio}`}>
      <h3 className='text-lg font-semibold mb-4'>{title}</h3>
      <div className='h-64'>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, value }) => `${name}: S/. ${value.toLocaleString()}`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend formatter={(value) => <span style={{ color: '#333' }}>{value}</span>} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
