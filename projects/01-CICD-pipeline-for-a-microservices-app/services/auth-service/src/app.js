import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());

// routes
app.use("/api/v1/auth", authRouter);

export default app;
