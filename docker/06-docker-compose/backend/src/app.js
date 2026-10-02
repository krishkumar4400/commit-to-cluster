import express from "express";
import morgan from "morgan";
import healthRouter from "./routes/health.route.js";
import userRouter from "./routes/user.routes.js";
import cors from "cors";

const app = express();

//middlewares
app.use(express.json({ limit: "16kb" }));
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/v1/health", healthRouter);
app.use("/api/v1/auth", userRouter);

export default app;
