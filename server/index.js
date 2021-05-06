const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const routes = require("./routes/index");
const bodyParser = require("body-parser");

require("dotenv").config();
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", routes());

app.listen(process.env.PORT, () => {
  console.log(`server ${process.env.PORT}`);
});
