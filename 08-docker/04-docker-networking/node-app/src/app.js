import express from "express";
import morgan from "morgan";
import healthRouter from "./routes/health.route.js";

const app = express();

//middlewares
app.use(express.json({ limit: "16kb" }));
app.use(morgan("dev"));

// routes
app.use("/api/v1/health", healthRouter);

export default app;
