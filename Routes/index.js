
import { Router } from "express";
import authRouters from "./auth.js"
import users from "./userList.js"
const routes = Router();

routes.use("/api" , authRouters);
routes.use("/api" , users);


export default routes;

