import React from 'react';
import { Route, BrowserRouter, Routes, Outlet, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthProvider';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFoundPage from './pages/Notpage';
import Account from './pages/Account';
import MyBlog from './pages/Myblog';
import AddBlog from './pages/Addblog';

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
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LayoutAdmin />} />
          
          <Route element={<LayoutAdmin />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/myblog" element={<MyBlog />} />
            <Route path="/new-post" element={<AddBlog />} />
          </Route>
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
