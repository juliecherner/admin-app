import { useState, useContext } from "react";
import { addUser } from "../../../../api/admin.api";
import { ResponseContext } from "../../../../context/response.context";
import { UsersContext } from "../../../../context/users.context";
import AddTaskIcon from "@mui/icons-material/AddTask";
import TextField from "@mui/material/TextField";

export const NewUser = () => {
  const [newUserName, setNewUserName] = useState<string>("");
  const { users, setUsers } = useContext(UsersContext);
  const { setAndClearResponse } = useContext(ResponseContext);

  const addNewUser = async () => {
    if (newUserName.length < 3) {
      setAndClearResponse({ text: "Minimum 3 letters", severity: "error" });
      return;
    }
    try {
      const user: any = await addUser(newUserName);
      if (user) {
        const createdUser = {
          id: user.id,
          name: user.name,
        };
        const updatedUsers = [...users, createdUser];
        setUsers(updatedUsers);
        setNewUserName("");
        setAndClearResponse({ text: "User is created", severity: "success" });
      }
    } catch (error: any) {
      setAndClearResponse({ text: error.message, severity: "error" });
    }
  };

  return (
    <div>
      <form
        onSubmit={(event: React.SyntheticEvent<Element, Event>) => {
          event.preventDefault();
        }}
      >
        <TextField
          id="outlined-basic"
          label="User's name"
          variant="outlined"
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewUserName(event.target.value)
          }
          value={newUserName}
        />
        <AddTaskIcon color="success" onClick={addNewUser} />
      </form>
    </div>
  );
};
