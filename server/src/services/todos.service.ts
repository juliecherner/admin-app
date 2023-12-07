import { DeleteResult } from "typeorm";
import { Todos } from "../entity/todos.entity";
import { dataSource } from "../database/data-source";
import { findUserById } from "./user.service";

export const getAllByUserId = async (userId: string): Promise<Todos[]> => {
  const todos = await dataSource
    .getRepository(Todos)
    .createQueryBuilder("todos")
    .where("todos.userId = :userId", {
      userId: parseInt(userId),
    })
    .getMany();

  if (!todos) {
    throw new Error("todos are not found");
  }

  return todos;
};

export const addOne = async (text: string, userId: string): Promise<Todos> => {
  const user = await findUserById(userId);

  const newUser = Todos.create({ name: text, user }).save();

  if (!newUser) throw new Error("todo is not created");

  return newUser;
};

export const deleteById = async (id: string): Promise<DeleteResult> => {
  const deletedUser = await Todos.delete({ id: parseInt(id) });

  if (!deletedUser) {
    throw new Error("todo wasn't deleted");
  }

  return deletedUser;
};
