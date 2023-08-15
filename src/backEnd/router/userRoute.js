const express = require("express");
const router = express.Router();
const { singup, getAllUsers, login } = require("../controller/userController");

router.post("/", singup);
router.get("/list", getAllUsers);
router.get("/:id", login);

module.exports = router;
