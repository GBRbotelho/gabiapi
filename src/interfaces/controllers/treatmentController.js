const CreateService = require("../../application/useCases/treatment/CreateService");
const GetServiceById = require("../../application/useCases/treatment/GetServiceById");
const GetAllServices = require("../../application/useCases/treatment/GetAllServices");
const UpdateService = require("../../application/useCases/treatment/UpdateService");
const DeleteService = require("../../application/useCases/treatment/DeleteService");

const treatmentRepository = require("../../infrastructure/repositories/treatmentRepository");
const GetByClientId = require("../../application/useCases/treatment/GetByClientId");

const treatmentController = {
  async create(req, res) {
    try {
      const CreatedService = await CreateService(req.body, treatmentRepository);

      return res.status(201).json(CreatedService);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getAllServices(req, res) {
    try {
      const services = await GetAllServices(treatmentRepository);

      return res.status(200).json(services);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getServiceById(req, res) {
    try {
      const { id } = req.params;
      const service = await GetServiceById(id, treatmentRepository);

      return res.status(201).json(service);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getByClientId(req, res) {
    try {
      const { id } = req.params;
      const service = await GetByClientId(id, treatmentRepository);

      return res.status(201).json(service);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateService(req, res) {
    try {
      const { id } = req.params;
      const UpdatedService = await UpdateService(
        id,
        req.body,
        treatmentRepository
      );
      return res.status(200).json(UpdatedService);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteService(req, res) {
    try {
      const { id } = req.params;
      const DeletedService = await DeleteService(id, treatmentRepository);

      return res.status(201).json(DeletedService);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = treatmentController;
