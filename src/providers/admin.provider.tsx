import React, { useState, useEffect } from "react";
import { AdminContext } from "../context/admin.context";
import { Admin } from "../types";

const initialState = {} as Admin;

type Props = {
  children: React.ReactNode;
};

const AdminProvider = ({ children }: Props): JSX.Element => {
  const [admin, setAdmin] = useState<Admin>(() => {
    const admin = localStorage.getItem("admin");
    return admin ? JSON.parse(admin) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("admin", JSON.stringify(admin));
  }, [admin]);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
