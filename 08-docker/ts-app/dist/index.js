import express from "express";
const app = express();
// middleware
app.use(express.json());
// routes
app.get("/", (req, res) => {
    res.send("Hello from TypeScript + Docker 🚀");
});
app.get("/api", (req, res) => {
    res.json({ message: "API working" });
});
export default app;
//# sourceMappingURL=index.js.map