const CreateService = require("../../application/useCases/service/CreateService");
const GetServiceById = require("../../application/useCases/service/GetServiceById");
const GetAllServices = require("../../application/useCases/service/GetAllServices");
const UpdateService = require("../../application/useCases/service/UpdateService");
const DeleteService = require("../../application/useCases/service/DeleteService");

const serviceRepository = require("../../infrastructure/repositories/serviceRepository");
const GetByClientId = require("../../application/useCases/service/GetByClientId");

const serviceController = {
  async create(req, res) {
    try {
      const CreatedService = await CreateService(req.body, serviceRepository);

      return res.status(201).json(CreatedService);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getAllServices(req, res) {
    try {
      const services = await GetAllServices(serviceRepository);

      return res.status(200).json(services);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getServiceById(req, res) {
    try {
      const { id } = req.params;
      const service = await GetServiceById(id, serviceRepository);

      return res.status(201).json(service);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getByClientId(req, res) {
    try {
      const { id } = req.params;
      const service = await GetByClientId(id, serviceRepository);

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
        serviceRepository
      );
      return res.status(200).json(UpdatedService);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteService(req, res) {
    try {
      const { id } = req.params;
      const DeletedService = await DeleteService(id, serviceRepository);

      return res.status(201).json(DeletedService);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = serviceController;
