import axios from "axios";
import express from "express";

const app = express();

app.get("/api/product", (req, res) => {
  const response = await axios.get('http://main-server-service');
  return res.status(200).json({
    message: "success",
    success: true,
    status: "ok",
    response,
  });
});

const port = 5000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
