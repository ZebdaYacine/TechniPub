const user = require("../module/userModule");
const asyncHandler = require("express-async-handler");
const userModule = require("../mappers/userMapper");
const bcrypt = require("bcrypt");
const register = asyncHandler(async (req, res) => {
  try {
    console.log("Received REGISTER request  with body:", req.body);
    const data = await userModule.registerMapping(req.body);
    const userObj = await user.create(data);
    res
      .status(200)
      .json({
        object: userModule.registerResponse(userJson),
        message: "account created successfully",
      });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const login = asyncHandler(async (req, res) => {
  let code = 200;
  try {
    console.log("Received LOGIN request with body:", req.body);
    const data = await userModule.loginMapping(req.body);
    const userJson = await user.findOne({ phone: data.phone });

    if (!userJson) {
      code = 404;
      throw new Error(`cannot find any user with this phone ${phone}`);
    }
    if (userJson.password === data.password) {
      console.log(userJson);
      res.status(code).json({
        object: userModule.loginResponse(userJson),
        message: "the current user",
      });
    } else {
      code = 404;
      throw new Error(`password incorrect`);
    }
  } catch (error) {
    res.status(code);
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
