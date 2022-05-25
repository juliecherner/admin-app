import { useContext } from "react";
import { ResponseContext } from "../../context/response.context";
import Alert from "@mui/material/Alert";

export const ServerResponse = () => {
  const { response } = useContext(ResponseContext);
  return (
    <div>
      {response.severity && response.text && (
        <Alert severity={response.severity}>{response.text}</Alert>
      )}
    </div>
  );
};
