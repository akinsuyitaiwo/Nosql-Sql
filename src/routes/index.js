const express = require("express");
const userRouter = require("./item");
const itemsRouter = require("./item.js");

const router = express.Router();

router.use("/users", userRouter);
router.use("/items", itemsRouter);

module.exports = router;