import "dotenv/config";
import app from "./src/app.js";
import http from "http";

const server = http.createServer(app);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is up and running on http://localhost:${port}`);
});
