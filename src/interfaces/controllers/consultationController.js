const CreateConsultation = require("../../application/useCases/consultation/CreateConsultation");
const GetByClientId = require("../../application/useCases/consultation/GetByClientId");
const consultationRepository = require("../../infrastructure/repositories/consultationRepository");

const consultationController = {
  async create(req, res) {
    try {
      const CreatedConsultation = await CreateConsultation(
        req.body,
        consultationRepository
      );

      return res.status(201).json(CreatedConsultation);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async getByClientId(req, res) {
    try {
      const { id } = req.params;
      const consultation = await GetByClientId(id, consultationRepository);

      return res.status(201).json(consultation);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = consultationController;
