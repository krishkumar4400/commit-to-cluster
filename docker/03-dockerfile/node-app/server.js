import "dotenv/config";
import http from "http";
import app from "./src/app.js";
import env from "./src/config/env.js";

const server = http.createServer(app);

const port = env.PORT;

server.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
