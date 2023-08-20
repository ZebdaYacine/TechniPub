const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    phone: {
      type: String,
    },
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    privilage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
