import React, { useState } from "react";
import { UsersContext } from "../context/users.context";
import { User } from "../types";

const initialState: User[] = []

type Props = {
  children: React.ReactNode;
};

const AdminProvider = ({ children }: Props): JSX.Element => {
  const [users, setUsers] = useState(initialState);

  return (
    <UsersContext.Provider value={{ users, setUsers}}>
      {children}
    </UsersContext.Provider>
  );
};

export default AdminProvider;