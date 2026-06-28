import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();

await connectDB();

// middlewares

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://novaiq.vercel.app",
      "https://blog-rho-ruby-42.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "apiKey"],
    credentials: true,
  }),
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "Don't worry, I am healthy",
    success: true,
  });
});

app.get("/test", (req, res) => {
  res.status(200).json({
    message: "This is a test route",
    success: true,
  });
});

// admin router
app.use("/api/admin", adminRouter);

// blog router
app.use("/api/blog", blogRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

export default app;
