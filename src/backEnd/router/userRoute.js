const express = require("express");
const router = express.Router();
const { singup, getAllUsers } = require("../controller/userController");

router.post("/", singup);
router.get("/list", getAllUsers);

module.exports = router;
