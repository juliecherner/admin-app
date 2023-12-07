import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AdminPage } from "./screens/adminPage/AdminPage";
import { LoginPage } from "./screens/loginPage/LoginPage";
import { UserPage } from "./screens/userPage/UserPage";
import { Header } from "./screens/header/Header";
import { ServerResponse } from "./components/serverResponse/ServerResponse";
import { ErrorPage } from "./screens/errorPage/ErrorPage";
import { AdminContext } from "./context/admin.context";
import "./App.css";

function App() {
  const { admin } = useContext(AdminContext);
  return (
    <div className="App">
      <Router>
        <Header />
        <ServerResponse />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/admin"
            element={admin.logged ? <AdminPage /> : <Navigate to="/" />}
          />
          <Route
            path="/user/:id"
            element={admin.logged ? <UserPage /> : <Navigate to="/" />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
