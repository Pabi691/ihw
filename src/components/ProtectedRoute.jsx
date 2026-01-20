import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './user/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { userToken } = useAuth();

  return ( userToken && (localStorage.getItem('uservarified') && localStorage.getItem('uservarified') !== "null") ) ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
