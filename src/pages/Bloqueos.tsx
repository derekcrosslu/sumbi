import React from 'react';
import { useStore } from '../store/store';

export const Bloqueos: React.FC = () => {
  const { bloqueos, getFamiliaById } = useStore();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bloqueos</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Familia</th>
            <th className="py-2 px-4 border-b">Fecha de Inicio</th>
            <th className="py-2 px-4 border-b">Fecha de Fin</th>
            <th className="py-2 px-4 border-b">Motivo</th>
            <th className="py-2 px-4 border-b">Estado</th>
          </tr>
        </thead>
        <tbody>
          {bloqueos.map((bloqueo) => {
            const familia = getFamiliaById(bloqueo.familia_id);
            return (
              <tr key={bloqueo.id}>
                <td className="py-2 px-4 border-b">{bloqueo.id}</td>
                <td className="py-2 px-4 border-b">{familia?.apellido_familia}</td>
                <td className="py-2 px-4 border-b">{new Date(bloqueo.fecha_inicio).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{bloqueo.fecha_fin ? new Date(bloqueo.fecha_fin).toLocaleDateString() : 'N/A'}</td>
                <td className="py-2 px-4 border-b">{bloqueo.motivo}</td>
                <td className="py-2 px-4 border-b">{bloqueo.estado}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};