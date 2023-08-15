const user = require("../module/userModule");

const singup = async (req, res) => {
  try {
    console.log("Received SINGUP request  with body:", req.body);
    const userObj = await user.create(req.body);
    res.status(200).json(userObj);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    console.log("Received LOGIN request with body:", req.body);
    const { id } = req.params;
    const userObj = await user.findById(id);
    if (!userObj) {
      res.status(404);
      throw new Error(`cannot find any user with ID ${id}`);
    }
    res.status(200).json(userObj);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    console.log("Received GetAllUsers request with body:", req.body);
    const userObj = await user.find({});
    res.status(200).json(userObj);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { singup, getAllUsers, login };
