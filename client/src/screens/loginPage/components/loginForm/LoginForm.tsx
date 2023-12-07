import { useContext, useState } from "react";
import { AdminContext } from "../../../../context/admin.context";
import { signIn } from "../../../../api/admin.api";
import { deleteToken } from "../../../../api/cookies";
import { ResponseContext } from "../../../../context/response.context";
import TextField from "@mui/material/TextField";
import { Admin } from "../../../../types";
import { hidePassword } from "../../../../utils/hidePassword";
import "./login-form.css";

export const LoginForm = () => {
  const { admin, setAdmin } = useContext(AdminContext);
  const { setAndClearResponse } = useContext(ResponseContext);

  const addFields = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = event.target.name;
    const value = event.target.value;
    setAdmin({ ...admin, [field]: value });
  };

  const handleSubmit = (event: React.SyntheticEvent<Element, Event>) => {
    event.preventDefault();

    if (admin.logged) {
      setAdmin({ name: "", password: "", logged: false });
      deleteToken();
      return;
    }

    if (!admin.name || !admin.password) {
      setAndClearResponse({
        text: "Fill in the login form",
        severity: "error",
      });
    } else {
      auth();
    }
  };

  const auth = async (): Promise<void> => {
    const adminInput: Admin = {
      password: admin.password,
      name: admin.name,
    };
    try {
      const currentAdmin = await signIn(adminInput);
      if (currentAdmin) {
        setAdmin({
          ...admin,
          password: hidePassword(admin.password),
          logged: true,
        });
      }
    } catch (error: any) {
      setAndClearResponse({ text: error.message, severity: "error" });
    }
  };

  return (
    <form className="login-page-form" onSubmit={(event) => handleSubmit(event)}>
      <TextField
        id="outlined-basic"
        label="Admin name"
        variant="outlined"
        type="text"
        name="name"
        onChange={(event) => addFields(event)}
        value={admin.name}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="text"
        name="password"
        onChange={(event) => addFields(event)}
        value={admin.password}
      />
      <button type="submit" className="login-page-from--button">
        {admin.logged ? "Logout" : "Login"}
      </button>
    </form>
  );
};
