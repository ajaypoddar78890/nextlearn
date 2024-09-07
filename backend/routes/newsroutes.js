// src/routes/newsRoutes.js
import express from "express";
import { createNews, getAllNews } from "../controller/newsControlar.js";


const router = express.Router();

// Route to create a news item
router.post("/news", createNews);
// Route to fetch all news items
router.get("/news", getAllNews);

export default router;
