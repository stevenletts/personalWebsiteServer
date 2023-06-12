const router = require("express").Router();
const sendMail = require("../controllers/emails");
require("dotenv").config();

router.post("/", sendMail);

module.exports = router;
