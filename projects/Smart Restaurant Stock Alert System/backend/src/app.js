import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// middlewares
app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

// routes
app.get('/', (req,res) => {
  return res.status(200).json({
    message: "Server is running",
    success: true
  });
});

app.get("/api/health", (req, res) => {
  return res.status(200).json({
    message: "Server healthy",
    success: true,
  });
});




export default app;
