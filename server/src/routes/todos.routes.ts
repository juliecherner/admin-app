import express from "express";
import * as todosController from "../controllers/todos.controller";
const route = express.Router();

route.get("/:id", todosController.getAllByUserId);
route.post("/", todosController.addOne);
route.delete("/:id", todosController.deleteOneById);

export default route;
