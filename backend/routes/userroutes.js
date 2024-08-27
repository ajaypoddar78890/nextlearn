import express from "express";
import { createuser } from "../controller/userControlar.js";

const router = express.Router();

// routes

router.post("/user", createuser);

export default router;
