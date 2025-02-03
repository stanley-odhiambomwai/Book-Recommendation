import express from "express";
import { getAllBooks, addBook } from "../Controllers/BookController.js";
import authMiddleware from "../Middleware/authMiddlware.js";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/add",authMiddleware,  addBook);

export default router;
