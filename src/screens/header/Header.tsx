import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  const headerConstants = [
    { title: "Login", path: "/" },
    { title: "Admin", path: "/admin" },
  ];

  return (
    <div className="header">
      {headerConstants.map((header) => (
        <div key={header.title}>
          <Link to={header.path} className="header--item">
            {header.title}
          </Link>
        </div>
      ))}
    </div>
  );
};
