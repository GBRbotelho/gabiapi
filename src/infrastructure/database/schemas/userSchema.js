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
});

const User = mongoose.model("User", userSchema);

module.exports = User;
