import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useClientStore } from '../store/store';

export const Header: React.FC = () => {
  const { importCSV, exportCSV } = useClientStore();

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        importCSV(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <header className='bg-white flex shadow-sm  w-full'>
      <div className='flex w-40  justify-center items-center bg-orange-100'>
        Logo Sumbi
      </div>
      <div className='bg-white  px-6 flex justify-between items-center w-full'>
        <div className='p-2'>
          <h2 className='text-2xl font-semibold'>Hola Javier....</h2>
          <p className='text-gray-500'>Welcome back to Sumbi Dashboard</p>
        </div>
        <div className='flex items-center space-x-14 px-4'>
          <div className='gap-3 flex'>
            <button
              className='px-4 py-1 bg-gray-100 text-gray-700 rounded-md'
              onClick={exportCSV}
            >
              Exportar
            </button>
            <label className='px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer'>
              + Importar
              <input
                type="file"
                accept=".csv"
                onChange={handleImport}
                className="hidden"
              />
            </label>
          </div>
          <div className='flex items-center space-x-2'>
            <img
              src='https://via.placeholder.com/32'
              alt='Javier Fernandez'
              className='w-8 h-8 rounded-full'
            />
            <span>Javier Fernandez</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </header>
  );
};
