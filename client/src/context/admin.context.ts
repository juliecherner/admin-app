import { createContext } from "react";
import { Admin } from "../types";

type AdminContent = {
  admin: Admin;
  setAdmin: (admin: Admin) => void;
};

export const AdminContext = createContext<AdminContent>({
  admin: <Admin>{},
  setAdmin: () => null,
});
