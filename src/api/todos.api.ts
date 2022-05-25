import { api } from "./api";
import { authHeader } from "./auth";

export const deleteTodoById = async (todoId: number) => {
  try {
    const { data } = await api.delete("/api/todos/" + todoId, authHeader());
    return data;
  } catch (error: any) {
    const customError = error.response.data;
    throw new Error(customError);
  }
};

export const allUserTodos = async (userId: number) => {
  try {
    const { data } = await api.get("/api/todos/" + userId, authHeader());
    return data;
  } catch (error: any) {
    const customError = error.response.data;
    throw new Error(customError);
  }
};

export const addTodo = async (name: string, userId: number) => {
  const newTodo = { name, userId };
  try {
    const { data } = await api.post("/api/todos", newTodo, authHeader());
    return data;
  } catch (error: any) {
    const customError = error.response.data;
    throw new Error(customError);
  }
};
