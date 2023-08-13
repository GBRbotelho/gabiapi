const CreateService = require("../../application/useCases/service/CreateService");
const serviceRepository = require("../../infrastructure/repositories/serviceRepository");

const serviceController = {
  async create(req, res) {
    try {
      const CreatedService = await CreateService(req.body, serviceRepository);

      return res.status(201).json(CreatedService);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  //   async getAllClients(req, res) {
  //     try {
  //       const clients = await GetAllClients(clientRepository);

  //       return res.status(200).json(clients);
  //     } catch (error) {
  //       return res.status(500).json({ error: error.message });
  //     }
  //   },

  //   async getClientById(req, res) {
  //     try {
  //       const { id } = req.params;
  //       const client = await GetClientById(id, userRepository);

  //       return res.status(201).json(client);
  //     } catch (error) {
  //       return res.status(500).json({ error: error.message });
  //     }
  //   },

  //   async updateClient(req, res) {
  //     try {
  //       const { id } = req.params;
  //       const UpdatedClient = await UpdateClient(id, req.body, clientRepository);
  //       return res.status(200).json(UpdatedClient);
  //     } catch (error) {
  //       return res.status(500).json({ error: error.message });
  //     }
  //   },

  //   async deleteClient(req, res) {
  //     try {
  //       const { id } = req.params;
  //       const DeletedClient = await DeleteClient(id, clientRepository);

  //       return res.status(201).json(DeletedClient);
  //     } catch (error) {
  //       return res.status(500).json({ error: error.message });
  //     }
  //   },
};

module.exports = serviceController;
