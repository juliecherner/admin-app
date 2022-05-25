import { Link } from "react-router-dom";
import { NewUser } from "./components/newUser/NewUser";
import { UsersList } from "./components/usersList/UsersList";

export const AdminPage = () => {
  return (
    <div>
      <UsersList />
      <NewUser />
      <div className="admin-page--link link">
        <Link to="/">Return to login page</Link>
      </div>
    </div>
  );
};
