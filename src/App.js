import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;