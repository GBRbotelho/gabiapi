const User = require("../database/schemas/userSchema");

module.exports = {
  async create(userData) {
    return await User.create(userData);
  },
  async findByEmail(email) {
    return await User.findOne({ email });
  },
  async findByToken(resetToken) {
    return await User.findOne({ resetPasswordToken: resetToken });
  },
  async update(userId, userData) {
    return await User.findByIdAndUpdate(userId, userData, { new: true });
  },
  async getAll() {
    return await User.find();
  },
  async getById(userId) {
    return await User.findById(userId);
  },
  async delete(clientId) {
    return await User.findByIdAndDelete(clientId);
  },
};
