import React, { useEffect } from 'react';
import { Refine } from '@refinedev/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Familias } from './pages/Familias';
import { Facturas } from './pages/Facturas';
import { Pagos } from './pages/Pagos';
import { Notificaciones } from './pages/Notificaciones';
import { Bloqueos } from './pages/Bloqueos';
import ClientInfoTable from './pages/ClientInfoTable';
import { Users } from './pages/Users';
import Configuracion from './pages/Configuracion';
import { useStore, generateMockData } from './store/store';

function App() {
  const { resetAllData } = useStore();

  useEffect(() => {
    // resetAllData();
    generateMockData();
    return () => {
      resetAllData();
    };
  }, []);

  return (
    <BrowserRouter>
      <Refine>
        <Routes>
          <Route element={<Layout />}>
            <Route
              index
              element={<Dashboard />}
            />
            <Route
              path='familias'
              element={<Familias />}
            />
            <Route
              path='facturas'
              element={<Facturas />}
            />
            <Route
              path='pagos'
              element={<Pagos />}
            />
            <Route
              path='notificaciones'
              element={<Notificaciones />}
            />
            <Route
              path='bloqueos'
              element={<Bloqueos />}
            />
            <Route
              path='reportes'
              element={<ClientInfoTable />}
            />
            <Route
              path='users'
              element={<Users />}
            />
            <Route
              path='configurar'
              element={<Configuracion />}
            />
          </Route>
        </Routes>
      </Refine>
    </BrowserRouter>
  );
}

export default App;
