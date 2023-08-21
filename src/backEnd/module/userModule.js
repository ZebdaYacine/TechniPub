const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    phone: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      default: null,
    },
    password: {
      type: String,
    },
    privilage: {
      type: String,
    },
    token: { type: String },
  },
  {
    timestamps: true,
  }
);
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
