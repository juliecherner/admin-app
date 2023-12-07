import { api } from "./api";
import { Admin, User } from "../types";
import { setCookies } from "./cookies";
import { authHeader } from "./auth";

export const signIn = async (admin: Admin) => {
  try {
    const { data } = await api.post("/api/admin/signin", admin);
    console.log(data);
    setCookies(data.token);
    return data;
  } catch (error: any) {
    const customError = error.response.data;
    throw new Error(customError);
  }
};

export const logout = (): void => {
  document.cookie = "token=";
  //localStorage.clear();
};

export const getAllUsersByAdminId = async () => {
  try {
    const { data } = await api.get("/api/users", authHeader());
    return data;
  } catch (error: any) {
    const customError = error.response.data;
    throw new Error(customError);
  }
};

export const deleteUserById = async (userId: number) => {
  try {
    const { data } = await api.delete("/api/users/" + userId, authHeader());
    return data;
  } catch (error: any) {
    const customError = error.response.data;
    throw new Error(customError);
  }
};

export const addUser = async (name: string) => {
  try {
    const { data } = await api.post("/api/users", { name }, authHeader());
    return data;
  } catch (error: any) {
    const customError = error.response.data;
    throw new Error(customError);
  }
};

export const getUser = async (id: string): Promise<User> => {
  try {
    const { data } = await api.get("/api/users/" + id, authHeader());
    return data;
  } catch (error: any) {
    const customError = error.response.data;
    throw new Error(customError);
  }
};

export const getLocalAdminData = () => {
  const admin = localStorage.getItem("admin");
  if (admin) {
    return JSON.parse(admin);
  }
};
