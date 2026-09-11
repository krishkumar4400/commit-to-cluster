import "dotenv/config";
import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

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

/**
 * docker compose up
 * docker compose up -d
 * docker compose down
 * docker compose ps
 * docker compose logs
 * docker compose logs node-app
 * docker compose logs -f node-app -> watch logs live of backend service
 * docker compose logs -f  -> watch logs live of all services
 * docker compose exec backend sh -> access shell of service 
 * docker compose build
 */
