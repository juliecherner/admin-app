import mongoose from "mongoose";
import { Order } from "../types";

// export type OrderDocument = Order extends mongoose.Document;

export type OrderDocument = mongoose.Document & Order;

const orderSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    idNumber: String,
    isPassport: Boolean,
    birthDate: String,
    reason: String,
    phoneNumber: String,
    HMO: String,
    city: String,
    agreement: Boolean,
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model<OrderDocument>("Profile", orderSchema);

export default OrderModel;
