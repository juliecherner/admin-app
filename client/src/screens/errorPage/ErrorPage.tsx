import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      This page does not exist
      <div className="error-page--link link">
        <Link to="/">Return to login page</Link>
      </div>
    </div>
  );
};
