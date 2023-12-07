import OrderModel from "../models/order.model";
import { Order } from "../types";

export const save = async (order: Order): Promise<any> => {
  const newOrder = (await OrderModel.create(order)).save();
  if (!newOrder) throw new Error("Not created");
  return newOrder;
};
