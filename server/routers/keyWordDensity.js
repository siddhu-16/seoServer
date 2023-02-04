const express = require("express");
const router = express.Router();

// const { getHtmlFile} = require("../controllers/parse.js");
const { getDensity } = require("../controllers/keyWordDensity.js");

router.post("/keyword",getDensity);

module.exports = router;