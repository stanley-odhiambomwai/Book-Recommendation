import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./Config/Database.js";
 import userRoutes from "./Routes/userRoutes.js";
import bookRoutes from "./Routes/bookRoutes.js";

dotenv.config();
connectDB();


const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

 app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
