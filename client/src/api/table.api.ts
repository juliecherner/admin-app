import { api } from "./api";
import { authHeader } from "./auth";

export const allUserTableQualities = async (userId: number) => {
  try {
    const { data } = await api.get("/api/table/" + userId, authHeader());
    return data;
  } catch (error: any) {
    const customError = error.response.data;
    throw new Error(customError);
  }
};

export const addTableQuality = async (
  text: string,
  type: string,
  userId: number
) => {
  const newTableQuality = { text, type, userId };
  try {
    const { data } = await api.post(
      "/api/table",
      newTableQuality,
      authHeader()
    );
    return data;
  } catch (error: any) {
    const customError = error.response.data;
    throw new Error(customError);
  }
};

export const deleteTableQualityById = async (todoId: number) => {
  try {
    const { data } = await api.delete("/api/table/" + todoId, authHeader());
    return data;
  } catch (error: any) {
    const customError = error.response.data;
    throw new Error(customError);
  }
};
