import React from 'react';

function Header() {
  return (
    <header className="bg-teal-500 shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">ระบบบริหารจัดการ</h1>
      <div>
        <logoutButton />
        <button className="text-gray-700 hover:text-gray-900">Logout</button>
      </div>
    </header>
  );
}

export default Header;