import React from 'react';
import { useStore } from '../store/store';

export const Notificaciones: React.FC = () => {
  const { notificaciones, getFamiliaById } = useStore();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Notificaciones</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Familia</th>
            <th className="py-2 px-4 border-b">Tipo</th>
            <th className="py-2 px-4 border-b">Contenido</th>
            <th className="py-2 px-4 border-b">Fecha de Envío</th>
            <th className="py-2 px-4 border-b">Estado</th>
          </tr>
        </thead>
        <tbody>
          {notificaciones.map((notificacion) => {
            const familia = getFamiliaById(notificacion.familia_id);
            return (
              <tr key={notificacion.id}>
                <td className="py-2 px-4 border-b">{notificacion.id}</td>
                <td className="py-2 px-4 border-b">{familia?.apellido_familia}</td>
                <td className="py-2 px-4 border-b">{notificacion.tipo_notificacion}</td>
                <td className="py-2 px-4 border-b">{notificacion.contenido}</td>
                <td className="py-2 px-4 border-b">{new Date(notificacion.fecha_envio).toLocaleString()}</td>
                <td className="py-2 px-4 border-b">{notificacion.estado}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};