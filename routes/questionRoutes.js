const express = require("express");

const { createQuestion } = require("../controllers/questionControllers");
const router = express.Router();

router.post("/create", createQuestion);

module.exports = router;