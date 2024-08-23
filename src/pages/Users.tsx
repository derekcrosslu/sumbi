import React from 'react';
import { useStore } from '../store/store';

export const Users: React.FC = () => {
  const { users } = useStore();

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
            {users.map((user) => (
              <tr key={user.id}>
                <td className='py-2 px-4 border-b'>{user.id}</td>
                <td className='py-2 px-4 border-b'>{user.username}</td>
                <td className='py-2 px-4 border-b'>{user.email}</td>
                <td className='py-2 px-4 border-b'>{`${user.nombre || ''} ${user.apellido || ''}`}</td>
                <td className='py-2 px-4 border-b'>{user.role_id}</td>
                <td className='py-2 px-4 border-b'>{user.is_active ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;