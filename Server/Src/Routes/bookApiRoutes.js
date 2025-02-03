import express from "express";
import { searchBooks } from "../Controllers/bookApiController.js";

const router = express.Router();

router.get("/search", searchBooks);

export default router;
