import React from "react";
import ReactDOM from "react-dom/client";
import AdminProvider from "./providers/admin.provider";
import UsersProvider from "./providers/users.provider";
import ResponseProvider from "./providers/response.provider";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AdminProvider>
      <ResponseProvider>
        <UsersProvider>
          <App />
        </UsersProvider>
      </ResponseProvider>
    </AdminProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
