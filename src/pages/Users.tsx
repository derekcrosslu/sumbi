import React, { useState, useMemo } from 'react';
import { useStore } from '../store/store';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 5;

export const Users: React.FC = () => {
  const { users } = useStore();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  const currentUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return users.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [users, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='flex flex-col w-full h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Users</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='py-2 px-4 border-b text-left'>ID</th>
              <th className='py-2 px-4 border-b text-left'>Username</th>
              <th className='py-2 px-4 border-b text-left'>Email</th>
              <th className='py-2 px-4 border-b text-left'>Name</th>
              <th className='py-2 px-4 border-b text-left'>Role ID</th>
              <th className='py-2 px-4 border-b text-left'>Active</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td className='py-2 px-4 border-b'>{user.id}</td>
                <td className='py-2 px-4 border-b'>{user.username}</td>
                <td className='py-2 px-4 border-b'>{user.email}</td>
                <td className='py-2 px-4 border-b'>{`${user.nombre || ''} ${
                  user.apellido || ''
                }`}</td>
                <td className='py-2 px-4 border-b'>{user.role_id}</td>
                <td className='py-2 px-4 border-b'>
                  {user.is_active ? 'Yes' : 'No'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Users;
