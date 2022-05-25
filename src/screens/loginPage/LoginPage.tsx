import { useContext } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/admin.context";
import { LoginForm } from "./components/loginForm/LoginForm";
import "./login-page.css";

export const LoginPage = () => {
  const { admin } = useContext(AdminContext);

  return (
    <div className="login-page">
      <LoginForm />
      {admin.logged && (
        <div className="login-page--link link">
          <Link to="/admin">To admin page</Link>
        </div>
      )}
    </div>
  );
};
