const express = require("express");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const cors = require("cors");
require("./db/mongoose");

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
//get req data (body json)
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(port || 3000, () => {
  console.log("Server is up on port " + port);
});
