const CreateConsultation = require("../../application/useCases/consultation/CreateConsultation");
const DeleteAllConsultationClientId = require("../../application/useCases/consultation/DeleteAllConsultationClientId");
const DeleteConsultation = require("../../application/useCases/consultation/DeleteConsultation");
const GetAllConsultations = require("../../application/useCases/consultation/GetAllConsultations");
const GetByClientId = require("../../application/useCases/consultation/GetByClientId");
const UpdateConsultation = require("../../application/useCases/consultation/UpdateConsultation");
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
  async getAllConsultations(req, res) {
    try {
      const services = await GetAllConsultations(consultationRepository);

      return res.status(200).json(services);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async updateConsultation(req, res) {
    try {
      const { id } = req.params;
      const UpdatedConsultation = await UpdateConsultation(
        id,
        req.body,
        consultationRepository
      );
      return res.status(200).json(UpdatedConsultation);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async deleteConsultation(req, res) {
    try {
      const { id } = req.params;
      const DeletedConsultation = await DeleteConsultation(
        id,
        consultationRepository
      );

      return res.status(201).json(DeletedConsultation);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async deleteAllConsultations(req, res) {
    try {
      const { id } = req.params;
      const DeletedConsultations = await DeleteAllConsultationClientId(
        id,
        consultationRepository
      );

      return res.status(201).json(DeletedConsultations);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = consultationController;
