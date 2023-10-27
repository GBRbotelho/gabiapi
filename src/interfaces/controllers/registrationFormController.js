const CreateRegistrationForm = require("../../application/useCases/registrationForm/CreateRegistrationForm");
const GetByClientId = require("../../application/useCases/registrationForm/GeyByClientId");
const UpdateRegistrationForm = require("../../application/useCases/registrationForm/UpdateRegistrationForm");
const DeleteRegistrationForm = require("../../application/useCases/registrationForm/DeleteRegistrationForm");

const registrationFormRepository = require("../../infrastructure/repositories/registrationFormRepository");

const registrationFormController = {
  async create(data) {
    try {
      const CreatedRegistrationForm = await CreateRegistrationForm(
        data,
        registrationFormRepository
      );

      return CreatedRegistrationForm;
    } catch (error) {
      return { error: error.message };
    }
  },

  async getByClientId(req, res) {
    try {
      const { id } = req.params;
      const registrationForm = await GetByClientId(
        id,
        registrationFormRepository
      );

      return res.status(201).json(registrationForm);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateRegistrationForm(req, res) {
    try {
      const { id } = req.params;
      const updatedRegistrationForm = await UpdateRegistrationForm(
        id,
        req.body,
        registrationFormRepository
      );
      return res.status(200).json(updatedRegistrationForm);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteRegistrationForm(clientId) {
    try {
      const DeletedRegistrationForm = await DeleteRegistrationForm(
        clientId,
        registrationFormRepository
      );

      return DeletedRegistrationForm;
    } catch (error) {
      return { error: error.message };
    }
  },
};

module.exports = registrationFormController;
