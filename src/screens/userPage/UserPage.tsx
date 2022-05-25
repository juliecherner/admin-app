import { useParams, Link } from "react-router-dom";
import { Todos } from "./components/todos/Todos";
import { Table } from "./components/table/Table";
import { Contacts } from "./components/contacts/Contacts";

export const UserPage = () => {
  const { id } = useParams();

  return (
    <div>
      <div>Welcome back!</div>
      <Todos userId={id} />
      <Link to="/admin">Back to admin page</Link>
      {/* <Table userId={id} />
      <Contacts userId={id} /> */}
    </div>
  );
};
