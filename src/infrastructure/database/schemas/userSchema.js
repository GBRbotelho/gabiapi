const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  accountLevel: {
    type: Number,
    required: true,
    default: 0,
  },
  emailConfirmationCode: {
    type: String,
    default: null,
  },
  isEmailVerified: {
    type: String,
    default: "NO",
  },
  resetPasswordToken: {
    type: String,
    default: null,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
