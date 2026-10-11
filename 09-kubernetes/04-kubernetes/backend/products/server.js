import axios from "axios";
import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", async (req, res) => {
  const response = await axios.get("http://main-server-service/");
  res.json({
    data: response.data,
  });
});

app.get("/api/product", async (req, res) => {
  const response = await axios.get("http://main-server-service/");
  res.json({
    data: response.data,
  });
});

app.listen(8080, () => {
  console.log(`server is running on http://localhost:8080`);
});
