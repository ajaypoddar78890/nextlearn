import express from "express";
import { getUser, createuser } from "../controller/userControlar.js";

const router = express.Router();

// routes

router.post("/user", createuser);
router.get("/user", getUser);

export default router;
