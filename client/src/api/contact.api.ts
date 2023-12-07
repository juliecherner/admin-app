import { api } from "./api";
import { authHeader } from "./auth";

export const allUserContacts = async (userId: number) => {
  try {
    const { data } = await api.get("/api/contacts/" + userId, authHeader());
    return data;
  } catch (error: any) {
    const customError = error.response.data;
    throw new Error(customError);
  }
};

export const addContact = async (
  name: string,
  number: number,
  userId: number
) => {
  const newContact = { name, number, userId };
  try {
    const { data } = await api.post("/api/contacts", newContact, authHeader());
    return data;
  } catch (error: any) {
    const customError = error.response.data;
    throw new Error(customError);
  }
};

export const deleteContactById = async (todoId: number) => {
  try {
    const { data } = await api.delete("/api/contacts/" + todoId, authHeader());
    return data;
  } catch (error: any) {
    const customError = error.response.data;
    throw new Error(customError);
  }
};
