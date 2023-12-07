import express from "express";
import * as contactController from "../controllers/contact.controller";
const route = express.Router();

route.get("/:id", contactController.getAllByUserId);
route.post("/", contactController.addOne);
route.delete("/:id", contactController.deleteOneById);

export default route;
