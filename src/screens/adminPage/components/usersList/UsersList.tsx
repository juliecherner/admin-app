import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllUsersByAdminId } from "../../../../api/admin.api";
import { ResponseContext } from "../../../../context/response.context";
import { UsersContext } from "../../../../context/users.context";
import { AdminContext } from "../../../../context/admin.context";
import { deleteUserById } from "../../../../api/admin.api";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { User } from "../../../../types";
import "./user-list.css";

export const UsersList = () => {
  const { admin } = useContext(AdminContext);
  const { users, setUsers } = useContext(UsersContext);
  const { setAndClearResponse } = useContext(ResponseContext);

  const getAllUsers = async () => {
    try {
      const allUsers = await getAllUsersByAdminId();
      setUsers(allUsers);
    } catch (error: any) {
      setAndClearResponse({ text: error.message, severity: "error" });
    }
  };

  const deleteById = async (id: any) => {
    try {
      const result = await deleteUserById(id);
      if (result) {
        const filteredUsers = users.filter((user) => user.id !== id);
        setUsers(filteredUsers);
        setAndClearResponse({ text: "User is deleted", severity: "success" });
      }
    } catch (error: any) {
      setAndClearResponse({ text: error.message, severity: "error" });
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="admin-page-user-list">
      <div className="admin-page-user-list-admin-info">
        <div>Hi, {admin.name}</div>
        <div>Users amount: {users.length}</div>
      </div>
      <div>
        {users.map((user: User) => (
          <div className="admin-page-user-list-item" key={user.id}>
            <div>{user.name}</div>
            <CloseIcon color="error" onClick={() => deleteById(user.id)} />
            <Button variant="contained">
              <Link to={"/user/" + user.id}>Open</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
