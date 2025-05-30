const express = require("express");
const router = express.Router();
const AIcontroller = require("../controllers/AI.controller");

router.post(
    "/get-review",
    AIcontroller.Model
);

module.exports = router;