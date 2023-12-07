import { Request, Response } from "express";
import * as userService from "../services/user.service";
import { JwtPayload } from "jsonwebtoken";

interface CustomRequest extends Request {
  admin: JwtPayload;
}

export const getAllByAdminId = async (
  req: Request,
  res: Response
): Promise<void> => {
  const adminId = (req as CustomRequest).admin.id;
  try {
    const users = await userService.getAllByAdminId(adminId);
    res.status(200).send(users);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await userService.findUserById(id);
    res.status(200).send(user);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const addOne = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.body;
  const adminId = (req as CustomRequest).admin.id;

  try {
    const newUser = await userService.addNew(name, adminId);
    res.status(201).send(newUser);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const deleteOneById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    await userService.deleteOneById(id);
    res.status(200).send("Deleted successfully");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
