const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/User.route");
const { bugRouter } = require("./routes/Bug.route");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/user", userRouter);
app.use("/bugs", bugRouter);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome to bug tracker API" });
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`Server listening on ${process.env.PORT}`);
  } catch (error) {
    console.log(`Error`, error);
  }
});
