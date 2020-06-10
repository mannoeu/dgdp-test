const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const port = 3333;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
requireDir("./src/models");

app.use("/api", require("./src/routes"));

app.listen(port, () => {
  console.log(`----[ Server is running at port ${port} ]----`);
});
