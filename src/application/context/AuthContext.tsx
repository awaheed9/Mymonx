import React, { createContext, useState, useEffect, useContext } from 'react';
import localStorage from '../../infrastructure/local-storage-service';

const AuthContext = createContext({});

export const AuthProvider = ({ children }:any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus =  () => {
      const token = localStorage.getAccessToken();
      setIsAuthenticated(!!token);
    };
    checkAuthStatus();
  }, []);

  const login =  (token:any) => {
     localStorage.setAccessToken(token);
    setIsAuthenticated(true);
  };

  const logout =  () => {
     localStorage.removeAccessToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);