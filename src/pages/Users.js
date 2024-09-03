import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">ID</th>
            <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Name</th>
            <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Email</th>
            <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Phone</th>
            <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="px-5 py-3 border-b">{user.id}</td>
              <td className="px-5 py-3 border-b">{user.name}</td>
              <td className="px-5 py-3 border-b">{user.email}</td>
              <td className="px-5 py-3 border-b">{user.phone || 'N/A'}</td>
              <td className="px-5 py-3 border-b">
                {user.address ? `${user.address.street}, ${user.address.city}` : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
