import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

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
              <td className="px-5 py-3 border-b">{user.phone}</td>
              <td className="px-5 py-3 border-b">{`${user.address.street}, ${user.address.city}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
