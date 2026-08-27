import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello Express");
});

const port = 4000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
