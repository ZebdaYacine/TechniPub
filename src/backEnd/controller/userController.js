const user = require("../module/userModule");
const asyncHandler = require("express-async-handler");
const userModule = require("../mappers/userMapper");
const localConfig = require("../utils/config");
const jwt = require("jsonwebtoken");

function createToken(user) {
  const token = jwt.sign({ userId: user.id }, localConfig.KEY, {
    expiresIn: "1h",
  });
  return token;
}
const register = asyncHandler(async (req, res) => {
  try {
    console.log("Received REGISTER request  with body:", req.body);
    const data = await userModule.registerMapping(req.body);
    const userObj = await user.create(data);
    if (userObj) {
      userObj.token = createToken(userObj);
      const userObje1 = await user.updateOne(
        { phone: data.phone },
        { $set: { token: userObj.token } }
      );
      console.log(userObje1);
      res.status(200).json({
        object: userModule.registerResponse(userObj),
        message: "account created successfully",
      });
    } else {
      res.status(500).json({
        object: "",
        message: "Phone number Already used",
      });
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const login = asyncHandler(async (req, res) => {
  try {
    console.log("Received LOGIN request with body:", req.body);
    const data = await userModule.loginMapping(req.body);
    const userObj = await user.findOne({ phone: data.phone });
    if (!userObj) {
      res.status(404).json({
        object: "",
        message: "user not found",
      });
    } else if (userObj.password === data.password) {
      userObj.token = createToken(userObj);
      const userObje1 = await user.updateOne(
        { phone: data.phone },
        { $set: { token: userObj.token } }
      );
      console.log(userObje1);
      res.status(200).json({
        object: userModule.loginResponse(userObj),
        message: "the current user",
      });
    } else {
      res.status(500).json({
        object: "",
        message: "password incorrect",
      });
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    console.log("Received GetAllUsers request with body:", req.body);
    const userObj = await user.find({});
    res.status(200).json(userObj);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

module.exports = { register, getAllUsers, login };
