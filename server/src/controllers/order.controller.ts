import { Request, Response } from "express";
import * as orderService from "../services/order.service";

export const save = async (req: Request, res: Response) => {
  const order = req.body;
  try {
    const newOrder = await orderService.save(order);
    res.status(200).send(newOrder);
  } catch (error: any) {
    res.status(500).send();
  }
};
