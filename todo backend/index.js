/* eslint-disable no-undef */
const express = require("express");
const app = express();
const cors = require("cors");

let toDos = [
  {
    task: "Go for a walk",
    isCompleted: false,
  },
  {
    task: "Read a book",
    isCompleted: false,
  },
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(toDos);
});

app.post("/", (req, res) => {
  const payload = req.body;

  toDos.push(payload);
  res.send({ message: "New user has been created", data: payload });
});

app.listen(8001, () => {
  console.log("server running");
});
