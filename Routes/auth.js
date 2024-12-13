import { Router } from "express";
import { login } from "../Controllers/login.js";

const router = Router();

router.post("/login" , login);


export default router;

