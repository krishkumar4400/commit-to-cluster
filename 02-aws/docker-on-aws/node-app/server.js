import http from "http";
import app from "./src/app.js";

const server = http.createServer(app);

const port = 3000;

server.listen(port, () => {
  console.log(`Server is up and running on http://localhost:${port}`);
});
