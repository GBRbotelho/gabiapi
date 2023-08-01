const GetAllUsers = require("../../application/useCases/user/GetAllUsers");
const GetUserById = require("../../application/useCases/user/GetUserById");
const UpdateUser = require("../../application/useCases/user/UpdateUser");
const LoginUser = require("../../application/useCases/user/LoginUser");
const UserRepository = require("../repositories/userRepository");

const userController = {
  async getAllUsers(req, res) {},

  async getUserById(req, res) {},

  async updateUser(req, res) {},

  async login(req, res) {},
};

module.exports = userController;
