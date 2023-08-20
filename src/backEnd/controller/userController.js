const user = require("../module/userModule");
const asyncHandler = require("express-async-handler");

const register = asyncHandler(async (req, res) => {
  try {
    console.log("Received REGISTER request  with body:", req.body);
    const userObj = await user.create(req.body);
    res
      .status(200)
      .json({ object: userObj, message: "account created successfully" });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const login = asyncHandler(async (req, res) => {
  let code = 200;
  try {
    console.log("Received LOGIN request with body:", req.body);
    const phone = req.body.phone;
    const passwordSended = req.body.password;
    const userJson = await user.findOne({ phone: phone });
    if (!userJson) {
      code = 404;
      throw new Error(`cannot find any user with this phone ${phone}`);
    }
    if (userJson.password === passwordSended) {
      res.status(code).json({ object: userJson, message: "the current user" });
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
