const express = require("express");
const { fetchItems} = require("../controllers/items.js");
const { verifyToken } = require("../middleware/authentication.js");

const router = express.Router();

router.get("/", verifyToken, fetchItems);

module.exports = router;