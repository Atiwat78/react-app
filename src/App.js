import React from 'react';
import { Route, BrowserRouter, Routes, Outlet, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFoundPage from './pages/Notpage';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
 
const LayoutAdmin = () => {
  return (
    <ProtectedRoute>
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="m-6 p-10 bg-gray-50 min-h-screen rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
    </ProtectedRoute>
  );
}

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route element={<LayoutAdmin />} />
        
      <Route path="*" element={<NotFoundPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
