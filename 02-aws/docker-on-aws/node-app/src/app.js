import express from "express";
import morgan from "morgan";

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  return res.status(200).send("Hello Express");
});

app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    message: "Server is up and running",
    success: true,
    status: "OK",
  });
});

export default app;
