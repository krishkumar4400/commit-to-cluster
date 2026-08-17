import express from "express";

const app = express();

app.get("/api/product", (req, res) => {
  return res.status(200).json({
    message: "success",
    success: true,
    status: "ok",
    data: sum,
  });
});

const port = 5000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
