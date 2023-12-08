const Treatment = require("../database/schemas/treatmentSchema");

module.exports = {
  async create(serviceData) {
    return await Treatment.create(serviceData);
  },
  async getByClientId(clientId) {
    return await Treatment.find({ clientId });
  },
  async update(serviceId, serviceData) {
    return await Treatment.findByIdAndUpdate(serviceId, serviceData, {
      new: true,
    });
  },
  async getAll() {
    return await Treatment.find();
  },
  async getById(serviceId) {
    return await Treatment.findById(serviceId);
  },
  async delete(serviceId) {
    return await Treatment.findByIdAndDelete(serviceId);
  },
  async deleteByClientId(clientId) {
    return await Treatment.deleteMany({ clientId: clientId });
  },
};
