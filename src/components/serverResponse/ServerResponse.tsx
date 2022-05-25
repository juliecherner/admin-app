import { useContext } from "react";
import { ResponseContext } from "../../context/response.context";
import Alert from "@mui/material/Alert";
import "./server-response.css";

export const ServerResponse = () => {
  const { response } = useContext(ResponseContext);
  return (
    <div className="server-response">
      {response.severity && response.text && (
        <Alert severity={response.severity}>{response.text}</Alert>
      )}
    </div>
  );
};
