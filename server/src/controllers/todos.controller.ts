import { Request, Response } from "express";
import * as todosService from "../services/todos.service";

export const getAllByUserId = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const todos = await todosService.getAllByUserId(id);
    res.status(200).send(todos);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const addOne = async (req: Request, res: Response): Promise<void> => {
  const { name, userId } = req.body;
  try {
    const newTodo = await todosService.addOne(name, userId);
    res.status(201).send(newTodo);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const deleteOneById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  await todosService.deleteById(id);
  res.status(200).send("Todo is deleted");
  try {
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
