import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Todos } from "./components/todos/Todos";
import { Table } from "./components/table/Table";
import { Contacts } from "./components/contacts/Contacts";
import { getUser } from "../../api/admin.api";
import { Content } from "../../types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./user-page.css";

export const UserPage = () => {
  const { id } = useParams();
  const [userName, setUserName] = useState<string>("");

  const [showContent, setShowContent] = useState<Content>({
    todos: false,
    contacts: false,
    table: false,
  });

  const getUserName = async (id: string | undefined): Promise<void> => {
    if (id === undefined) return;
    try {
      const user = await getUser(id);
      setUserName(user.name);
    } catch (error) {
      setUserName("");
    }
  };

  useEffect(() => {
    getUserName(id);
  }, [id]);

  return (
    <div className="user-page">
      {userName.length > 0 ? (
        <div>{userName}, welcome back! </div>
      ) : (
        <div>User is not found</div>
      )}

      <div className="user-page-menu">
        <div
          onClick={() => {
            setShowContent({ ...showContent, todos: !showContent.todos });
          }}
        >
          <div className="user-page-menu-title">
            <KeyboardArrowDownIcon />
            <div>Todos</div>
          </div>
        </div>
        {showContent.todos && <Todos userId={id} />}
        <div
          onClick={() => {
            setShowContent({ ...showContent, contacts: !showContent.contacts });
          }}
        >
          <div className="user-page-menu-title">
            <KeyboardArrowDownIcon />
            <div>Contacts</div>
          </div>
        </div>
        {showContent.contacts && <Contacts userId={id} />}

        <div
          onClick={() => {
            setShowContent({ ...showContent, table: !showContent.table });
          }}
        >
          <div className="user-page-menu-title">
            <KeyboardArrowDownIcon />
            <div>Table</div>
          </div>
        </div>
        {showContent.table && <Table userId={id} />}

        <div className="user-page--link link">
          <Link to="/admin">Back to admin page</Link>
        </div>
      </div>
    </div>
  );
};
