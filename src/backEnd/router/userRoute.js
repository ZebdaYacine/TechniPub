const express = require("express");
const router = express.Router();
const {
  register,
  getAllUsers,
  login,
} = require("../controller/userController");

router.post("/register", register);
router.get("/list", getAllUsers);
router.post("/login", login);

module.exports = router;
