import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-semibold">Hola Javier</h2>
        <p className="text-gray-500">Welcome back to Sumbi Dashboard</p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md">
          Exportar
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          + Importar
        </button>
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/32"
            alt="Javier Fernandez"
            className="w-8 h-8 rounded-full"
          />
          <span>Javier Fernandez</span>
        </div>
      </div>
    </header>
  );
};