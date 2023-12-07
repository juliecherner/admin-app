import { Request, Response } from "express";
import * as contactService from "../services/contact.service";

export const getAllByUserId = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const contacts = await contactService.getAllByUserId(id);
    res.status(200).send(contacts);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const addOne = async (req: Request, res: Response): Promise<void>  => {
  const { number, name, userId } = req.body;
  try {
    const newContact = await contactService.addOne(userId, name, number);
    res.status(201).send(newContact);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteOneById = async (req: Request, res: Response): Promise<void>  => {
  const { id } = req.params;
  try {
    await contactService.deleteById(id);
    res.status(200).send("Deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};
