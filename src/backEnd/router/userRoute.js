const express = require("express");
const router = express.Router();
const { singup, getAllUsers, login } = require("../controller/userController");

router.post("/", singup);
router.get("/list", getAllUsers);
router.post("/login", login);

module.exports = router;
