import React, { useState } from "react";
import { ResponseContext } from "../context/response.context";
import { Response } from "../types";

const initialState: Response = {
  text: "",
  severity: "",
};

type Props = {
  children: React.ReactNode;
};

const AdminProvider = ({ children }: Props): JSX.Element => {
  const [response, setResponse] = useState(initialState);

  const setAndClearResponse = (response: Response): void => {
    setResponse(response);

    setTimeout(() => {
      setResponse({ text: "", severity: "" });
    }, 2000);
  };

  return (
    <ResponseContext.Provider value={{ response, setAndClearResponse }}>
      {children}
    </ResponseContext.Provider>
  );
};

export default AdminProvider;
