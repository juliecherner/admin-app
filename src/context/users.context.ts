import { createContext } from "react";
import { User } from "../types";

type UsersContent = {
  users: User[];
  setUsers: (users: User[]) => void;
};

export const UsersContext = createContext<UsersContent>({
  users: [],
  setUsers: () => null,
});
