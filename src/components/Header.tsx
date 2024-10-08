import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useStore } from '../store/store';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const { importCSV, exportCSV } = useStore();
  const navigate = useNavigate();

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        importCSV(content);
        navigate('/reportes');
      };
      reader.readAsText(file);
    }
  };

  return (
    <header className='bg-white flex shadow-sm  w-full'>
      <div className='flex px-10 py-2 justify-center items-center'>
        <img
          src='/SumbiLogo.png'
          alt='Sumbi'
          // className='w-10 h-13'
        />
      </div>
      <div className='bg-white  px-6 flex justify-between items-center w-full'>
        <div className='p-2'>
          {/* <h2 className='text-2xl font-semibold'>Hola! </h2>
          <p className='text-gray-500'>Bienvenido Sumbi Dashboard</p> */}
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
                type='file'
                accept='.csv'
                onChange={handleImport}
                className='hidden'
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
