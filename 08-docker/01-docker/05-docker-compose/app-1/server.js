import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running",
    success: true,
    status: "OK",
    environment: process.env.NODE_ENV,
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
