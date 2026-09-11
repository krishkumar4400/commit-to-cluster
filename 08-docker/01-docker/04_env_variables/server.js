import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  // res.send('Hello Express');
  return res.status(200).json({
    message: "Hello Express",
    success: true,
    environment: process.env.NODE_ENV || "DEFAULT",
  });
});

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

/**
 * docker build -t node-app .
 * docker run --rm --name=node-app  -e PORT=4040 -p 4040:4040  node-app
 * docker run --rm --name=node-app -p 4040:4040 -e PORT=4040 -e  NODE_ENV="development" node-app:v2
 *docker exec -it node-app sh
 *docker exec -it node-app ls
 *docker run -d --rm --name=node-app -p 4040:4040 --env-file .env node-app

 */
