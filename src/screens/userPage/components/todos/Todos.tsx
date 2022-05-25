import { useState, useContext, useEffect } from "react";
import { ResponseContext } from "../../../../context/response.context";
import {
  allUserTodos,
  deleteTodoById,
  addTodo,
} from "../../../../api/todos.api";
import { Todo } from "../../../../types";
import CloseIcon from "@mui/icons-material/Close";
import AddTaskIcon from "@mui/icons-material/AddTask";
import TextField from "@mui/material/TextField";
import "./todos.css";

type Props = {
  userId: string | undefined;
};

export const Todos = ({ userId }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const { setAndClearResponse } = useContext(ResponseContext);

  const getAllTodos = async () => {
    if (userId === undefined) return;
    try {
      const allTodos = await allUserTodos(parseInt(userId));
      setTodos(allTodos);
    } catch (error: any) {
      setAndClearResponse({ text: error.message, severity: "error" });
    }
  };

  const deleteTodo = async (id: number | undefined) => {
    if (!id) return;
    try {
      const result = await deleteTodoById(id);

      if (result) {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        setAndClearResponse({ text: result, severity: "success" });
      }
    } catch (error: any) {
      setAndClearResponse({ text: error.message, severity: "error" });
    }
  };

  const addNewTodo = async () => {
    if (!userId) return;
    if (newTodo.length < 5) {
      setAndClearResponse({ text: "Minimum 5 letters", severity: "error" });
      return;
    }
    try {
      const todo = await addTodo(newTodo, parseInt(userId));
      const { id, user, created_at, name } = todo;
      if (todo) {
        const updatedTodos = [
          ...todos,
          { id, userId: user.id, created_at, name },
        ];
        setTodos(updatedTodos);
        setNewTodo("");
        setAndClearResponse({ text: "Todo is added", severity: "success" });
      }
    } catch (error: any) {
      setAndClearResponse({ text: error.message, severity: "error" });
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <div>
      <div>
        <div className="user-page-todos-info">
          <div>Todos of the user</div>
          {todos.length < 1 && <div>The user does not have todos</div>}
        </div>

        {todos.map((todo: Todo) => (
          <div className="user-page-todo-item" key={todo.id}>
            <div>{todo?.name}</div>
            <div>{todo?.created_at?.toString().slice(0, 10)}</div>
            <CloseIcon color="error" onClick={() => deleteTodo(todo.id)} />
          </div>
        ))}
      </div>
      <form
        className="user-page-todos new-item"
        onSubmit={(event: React.SyntheticEvent<Element, Event>) =>
          event.preventDefault()
        }
      >
        <TextField
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(event.target.value)
          }
          value={newTodo}
          placeholder="Add new todo"
        />
        <div>
          <AddTaskIcon color="success" onClick={addNewTodo} />
        </div>
      </form>
    </div>
  );
};
