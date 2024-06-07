// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import authService from '../services/authService';

// const ProtectedRoute = ({ element: Element, roles, ...rest }) => {
//   const currentUser = authService.getCurrentUser();
//   console.log('checck',currentUser.payload)
//   const isAuthenticated = !!currentUser;

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   if (roles && !roles.includes(currentUser.role)) {
//     return <Navigate to="/" />;
//   }

//   return <Route {...rest} element={<Element />} />;
// };

// export default ProtectedRoute;


// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authService from '../services/authService';

const ProtectedRoute = ({ roles }) => {
  const currentUser = authService.getCurrentUser();
  console.log('cureeeentprotecxt',currentUser.role)
  const isAuthenticated = !!currentUser;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(currentUser.role)) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

