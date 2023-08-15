const user = require("../module/userModule");
const asyncHandler = require("express-async-handler");

const singup = asyncHandler(async (req, res) => {
  try {
    console.log("Received SINGUP request  with body:", req.body);
    const userObj = await user.create(req.body);
    res.status(200).json(userObj);
  } catch (error) {
    res.status(500);
    throw new Error({ message: error.message });
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
      res.status(code).json({ data: userJson, message: "the current user" });
    } else {
      code = 404;
      throw new Error(`password incorrect`);
    }
  } catch (error) {
    res.status(code);
    throw new Error({ message: error.message });
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    console.log("Received GetAllUsers request with body:", req.body);
    const userObj = await user.find({});
    res.status(200).json(userObj);
  } catch (error) {
    res.status(500);
    throw new Error({ message: error.message });
  }
});

module.exports = { singup, getAllUsers, login };
