const user = require("../module/userModule");

const singup = async (req, res) => {
  try {
    console.log("Received POST request with body:", req.body);
    const userObj = await user.create(req.body);
    res.status(200).json(userObj);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const userObj = await user.find({});
    res.status(200).json(userObj);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { singup, getAllUsers };
