import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
  SquareArrowRight,
  SquareArrowLeft,
  Power,
} from 'lucide-react';

import { useStore } from '../store/store';

export const Sidebar: React.FC = () => {
  const { menu, setMenu } = useStore();

  const menuItems = [
    {
      icon: <LayoutGrid size={20} />,
      label: 'Dashboard',
      active: true,
      url: '/',
    },
    { icon: <Users size={20} />, label: 'Familias', url: '/familias' },
    { icon: <CreditCard size={20} />, label: 'Pagos', url: '/facturas' },

    { icon: <Calendar size={20} />, label: 'Calendario', url: '/calendario' },
    {
      icon: <Bell size={20} />,
      label: 'Notificaciones',
      url: '/notificaciones',
    },
    { icon: <Ban size={20} />, label: 'Bloqueos', url: '/bloqueos' },
    { icon: <User size={20} />, label: 'Usuarios', url: '/usuarios' },
    { icon: <FileText size={20} />, label: 'Reportes', url: '/reportes' },
    { icon: <Settings size={20} />, label: 'Configurar', url: '/configurar' },
  ];

  return (
    <aside
      className={`${
        menu ? 'w-20' : 'w-40'
      } bg-white shadow-md rounded-b-lg pb-6`}
    >
      <nav className='mt-8'>
        <button
          className={`${
            menu ? 'px-6' : 'px-4'
          } mb-8 bg-white text-gray-700 rounded-md`}
          onClick={setMenu}
        >
          {menu ? (
            <SquareArrowRight size={20} />
          ) : (
            <SquareArrowLeft size={20} />
          )}
        </button>
        <Menu
          menuItems={menuItems}
          menuBool={menu}
        />
        <span className='flex mt-8 gap-3'>
          <Power
            size={20}
            className={` ${
              menu ? ' ml-6   ' : 'ml-4'
            }  text-gray-700 hover:text-red-400`}
          />
          {!menu && <span className='hover:text-red-400'>Salir</span>}
        </span>
      </nav>
    </aside>
  );
};

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  url: string;
}

const Menu: React.FC<{ menuItems: MenuItem[]; menuBool: Boolean }> = ({
  menuItems,
  menuBool,
}) => {
  const location = useLocation();
  console.log('location: ', location);
  return (
    <>
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.url}
          className={`flex items-center  ${
            menuBool ? 'py-3 px-6' : 'py-2 px-4'
          } text-gray-700 hover:bg-gray-100 ${
            location.pathname === item.url ? 'bg-blue-100' : ''
          }`}
        >
          {menuBool ? (
            item.icon
          ) : (
            <span className='flex gap-3'>
              {' '}
              {item.icon} <span>{item.label}</span>
            </span>
          )}
        </Link>
      ))}
    </>
  );
};
