import express from "express";
import adminRoute from "./admin.route";
import todosRoute from "./todos.routes";
import tableRoutes from "./table.routes";
import contactRoute from "./contact.routes";
import usersRoute from "./user.routes";
import { auth } from "../middleware/auth";

const router = express.Router();

router.use("/admin", adminRoute);
router.use("/users", auth, usersRoute);
router.use("/todos", auth, todosRoute);
router.use("/contacts", auth, contactRoute);
router.use("/table", auth, tableRoutes);

export default router;
