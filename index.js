require("dotenv").config();
const emailRouter = require("./routes/email");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
app.use("/contact", emailRouter);

app.listen(5000, () => console.log("Server Running"));
