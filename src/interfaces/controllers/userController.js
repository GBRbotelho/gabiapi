const GetAllUsers = require("../../application/useCases/user/GetAllUsers");
const CreateUser = require("../../application/useCases/user/CreateUser");
const DeleteUser = require("../../application/useCases/user/DeleteUser");
const GetUserById = require("../../application/useCases/user/GetUserById");
const UpdateUser = require("../../application/useCases/user/UpdateUser");
const LoginUser = require("../../application/useCases/user/LoginUser");
const UserRepository = require("../../infrastructure/repositories/userRepository");

const userController = {
  async create(req, res) {
    try {
      const CreatedUser = await CreateUser(req.body, UserRepository);

      return res.status(201).json(CreatedUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getAllUsers(req, res) {},

  async getUserById(req, res) {},

  async updateUser(req, res) {},

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const DeletedUser = await DeleteUser(id, UserRepository);

      return res.status(201).json(DeletedUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async login(req, res) {},
};

module.exports = userController;
