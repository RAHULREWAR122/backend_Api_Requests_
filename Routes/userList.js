import { Router } from "express";
import { usersList } from "../Controllers/usersList.js";


const router = Router();

router.get("/users" , usersList);

export default router;

