import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import {
  LayoutGrid,
  Users,
  CreditCard,
  Ban,
  Calendar,
  Bell,
  User,
  FileText,
  ShieldAlert,
  HelpCircle,
  Settings,
  LogOut,
  ChevronDown,
  MoreVertical,
  ArrowUpRight,
  ArrowLeftToLine,
  ArrowRightFromLine,
} from 'lucide-react';

import { useStore } from '../store/store';

export const Sidebar: React.FC = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Familias', path: '/familias' },
    { label: 'Facturas', path: '/facturas' },
    { label: 'Pagos', path: '/pagos' },
    { label: 'Notificaciones', path: '/notificaciones' },
    { label: 'Bloqueos', path: '/bloqueos' },
  ];

  return (
    <aside className='w-64 bg-white shadow-md'>
      <nav className='mt-8'>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className='flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100'
          >
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};
