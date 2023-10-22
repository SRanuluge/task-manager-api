const express = require("express");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const cors = require("cors");
require("./db/mongoose");

const app = express();
const port = process.env.PORT;

// const whitelist = ["http://localhost:5173", "https://sranuluge.github.io"];
// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("origin", origin);
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };
app.use(
  cors({
    origin: "*",
  })
);
//get req data (body json)
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(port || 3000, () => {
  console.log("Server is up on port " + port);
});
