import express from "express";
import * as tableController from "../controllers/table.controller";
const route = express.Router();

route.get("/:id", tableController.getAllByUserId);
route.post("/", tableController.addOneByType);
route.delete("/:id", tableController.deleteOneById);

export default route;
