import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello Express",
    success: true,
    status: "OK",
  });
});

app.get("/api/hello", (req, res) => {
  return res.status(200).json({
    message: "Hello World",
    success: true,
    status: "OK",
  });
});
app.get("/api/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "user 1",
    },
    {
      id: 2,
      name: "user 2",
    },
    {
      id: 3,
      name: "user 3",
    },
    {
      id: 4,
      name: "user 4",
    },
  ];

  return res.status(200).json(users);
});

const port = 4000;

app.listen(port, () => {
  console.log(`Server is up and running on http://localhost:${port}`);
});
