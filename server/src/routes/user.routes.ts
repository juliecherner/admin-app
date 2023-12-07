import express from "express";
import * as userController from "../controllers/user.controller";
const route = express.Router();

route.get("/", userController.getAllByAdminId);
route.get("/:id", userController.getUserById);
route.post("/", userController.addOne);
route.delete("/:id", userController.deleteOneById);

export default route;
