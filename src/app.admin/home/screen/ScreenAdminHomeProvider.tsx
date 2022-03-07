import React, { createContext, useContext } from 'react';

interface AdminHomeContextProp {}

const InitialAdminHomeContext: AdminHomeContextProp = {};

const AdminHomeContext = createContext<AdminHomeContextProp>(
  InitialAdminHomeContext
);
export const useAdminHomeContext = () => useContext(AdminHomeContext);

export default function ScreenAdminHomeProvider({ children }) {
  const adminHomeContext = {};

  return (
    <AdminHomeContext.Provider value={adminHomeContext}>
      {children}
    </AdminHomeContext.Provider>
  );
}
