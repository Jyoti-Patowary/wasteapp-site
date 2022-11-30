const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

const connectDB = require("./config/db");
connectDB();

app.use("/", require("./routes/admin"));
app.use("/", require("./routes/customer"));
app.use("/", require("./routes/notification"));
app.use("/", require("./routes/ticket"));
app.use("/", require("./routes/worker"));
app.use("/", require("./routes/user"));

app.use("/user", user);

app.listen(4000, function () {
  console.log("listening on 4000");
});
