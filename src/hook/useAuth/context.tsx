import React, { createContext, FC } from 'react';
import { useAuth } from './index';
import { TypesAuth } from './types';

// @ts-ignore
export const AuthContext = createContext<TypesAuth>({});


export const AuthProvider:FC<any> = ({ children }) => {
  const value = useAuth();
  
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  );
};
