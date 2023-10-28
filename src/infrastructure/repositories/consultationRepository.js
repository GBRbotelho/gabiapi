const Consultation = require("../database/schemas/consultationSchema");

module.exports = {
  async create(consultationData) {
    return await Consultation.create(consultationData);
  },
  async getByClientId(clientId) {
    return await Consultation.find({ clientId });
  },
  async update(consultationId, consultationData) {
    return await Consultation.findByIdAndUpdate(
      consultationId,
      consultationData,
      {
        new: true,
      }
    );
  },
  async getAll() {
    return await Consultation.find();
  },
  async getById(consultationId) {
    return await Consultation.findById(consultationId);
  },
  async delete(consultationId) {
    return await Consultation.findByIdAndDelete(consultationId);
  },
};
