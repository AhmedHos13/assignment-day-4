const express = require("express");
const app = express();
// const { readFile, writeFile } = require("./helper");
const todoRoutes = require("./routes/todos");
const userRoutes = require("./routes/users");
const mongoose = require("mongoose");
const authMiddleware = require("./middlewares/auth");
mongoose.connect("mongodb://localhost:27017/crud");

app.use(express.json());

app.use("/users", userRoutes);
app.use(authMiddleware);
app.use("/todos", todoRoutes);

app.use("*", (req, res, next) => {
  res.status(404).end();
});

app.use((err, req, res, next) => {
  res.status(500).json(err);
});

const { port = 7000 } = process.env;

app.listen(port, () => {
  console.log(`Local Host Started Successfully:${port}`);
});
