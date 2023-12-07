import { Request, Response } from "express";
import * as adminService from "../services/admin.service";

export const signUp = async (req: Request, res: Response): Promise<void> => {
  const { name, password } = req.body;
  try {
    const newAdmin = await adminService.signUp(name, password);
    res.status(200).send(newAdmin);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const signIn = async (req: Request, res: Response): Promise<void> => {
  const { name, password } = req.body;
  try {
    const admin = await adminService.signIn(name, password);

    // res.cookie("token", admin.token, {
    //   secure: true,
    //   maxAge: 120000,
    //   httpOnly: false,
    // });
    //res.status(200).send({ id: admin.id, name: admin.name });
    res.status(200).send(admin);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
