const GetAllUsers = require("../../application/useCases/user/GetAllUsers");
const CreateUser = require("../../application/useCases/user/CreateUser");
const DeleteUser = require("../../application/useCases/user/DeleteUser");
const GetUserById = require("../../application/useCases/user/GetUserById");
const UpdateUser = require("../../application/useCases/user/UpdateUser");
const LoginUser = require("../../application/useCases/user/LoginUser");
const userRepository = require("../../infrastructure/repositories/userRepository");

const userController = {
  async create(req, res) {
    try {
      const CreatedUser = await CreateUser(req.body, userRepository);

      return res.status(201).json(CreatedUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getAllUsers(req, res) {
    try {
      const users = await GetAllUsers(userRepository);

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await GetUserById(id, userRepository);

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const UpdatedUser = await UpdateUser(id, req.body, userRepository);
      return res.status(200).json(UpdatedUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const DeletedUser = await DeleteUser(id, userRepository);

      return res.status(201).json(DeletedUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async login(req, res) {
    try {
      const token = await LoginUser(req.body, userRepository);
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = userController;
