import express from "express";
import * as adminController from "../controllers/admin.controller";
const route = express.Router();

//route.post("/signup", adminController.signUp);
route.post("/signin", adminController.signIn);

export default route;
