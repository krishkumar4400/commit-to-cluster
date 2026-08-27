import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }

  return res.status(200).json({
    message: "success",
    success: true,
    status: "ok",
    data: sum,
  });
});

const port = 4000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
