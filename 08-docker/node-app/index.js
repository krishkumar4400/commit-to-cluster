import 'dotenv/config';
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    status: "Success",
    message: "Hello from express server",
  });
});

// const port = +process.env.PORT ?? 8000;
const port = process.env.PORT ?? 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/**
 * In order to run this basic application we need node.js of any version (what are the requirements)
 *
 * Node - v22.18.0
 * npm - 10.9.3
 * may be
 * mongoose
 * redis
 * etc
 */
