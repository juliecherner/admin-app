import express from "express";
import * as orderController from "../controllers/order.controller";
const route = express.Router();

route.post("/", orderController.save);

export default route;
