const Service = require("../database/schemas/serviceSchema");

module.exports = {
  async create(serviceData) {
    return await Service.create(serviceData);
  },
  async getByClientId(clientId) {
    return await Service.find({ clientId });
  },
  async update(serviceId, serviceData) {
    return await Service.findByIdAndUpdate(serviceId, serviceData, {
      new: true,
    });
  },
  async getAll() {
    return await Service.find();
  },
  async getById(serviceId) {
    return await Service.findById(serviceId);
  },
  async delete(serviceId) {
    return await Service.findByIdAndDelete(serviceId);
  },
};
