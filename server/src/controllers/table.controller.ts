import { Request, Response } from "express";
import * as tableService from "../services/table.service";

export const getAllByUserId = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const allQualities = await tableService.getAllByUserId(id);
    res.status(200).send(allQualities);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const addOneByType = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId, type, text } = req.body;
  try {
    const newQuality = await tableService.addOne(userId, type, text);
    res.status(201).send(newQuality);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const deleteOneById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await tableService.deleteById(id);
    res.status(200).send("Deleted");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
