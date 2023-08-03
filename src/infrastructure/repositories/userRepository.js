const User = require("../database/schemas/userSchema");

module.exports = {
  async create(userData) {
    return await User.create(userData);
  },
};
