const GetAllClients = require("../../application/useCases/client/GetAllClients");
const CreateClient = require("../../application/useCases/client/CreateClient");
const DeleteClient = require("../../application/useCases/client/DeleteClient");
const GetClientById = require("../../application/useCases/client/GetClientById");
const UpdateClient = require("../../application/useCases/client/UpdateClient");
const clientRepository = require("../../infrastructure/repositories/clientRepository");

const clientController = {
  async create(req, res) {
    try {
      const CreatedClient = await CreateClient(req.body, clientRepository);

      return res.status(201).json(CreatedClient);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getAllClients(req, res) {
    try {
      const clients = await GetAllClients(clientRepository);

      return res.status(200).json(clients);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getClientById(req, res) {
    try {
      const { id } = req.params;
      const client = await GetClientById(id, clientRepository);

      return res.status(201).json(client);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateClient(req, res) {
    try {
      const { id } = req.params;
      const UpdatedClient = await UpdateClient(id, req.body, clientRepository);
      return res.status(200).json(UpdatedClient);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteClient(req, res) {
    try {
      const { id } = req.params;
      const DeletedClient = await DeleteClient(id, clientRepository);

      return res.status(201).json(DeletedClient);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = clientController;
