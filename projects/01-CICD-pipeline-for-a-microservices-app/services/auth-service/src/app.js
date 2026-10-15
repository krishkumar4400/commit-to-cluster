import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());

// routes

export default app;
