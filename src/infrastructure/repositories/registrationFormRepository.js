const RegistrationForm = require("../database/schemas/registrationFormSchema");

module.exports = {
  async create(registrationFormData) {
    return await RegistrationForm.create(registrationFormData);
  },
  async findById(registrationFormId) {
    return await RegistrationForm.findById(registrationFormId);
  },
  async update(registrationFormId, registrationFormData) {
    return await RegistrationForm.findByIdAndUpdate(
      registrationFormId,
      registrationFormData,
      { new: true }
    );
  },
  async getAll() {
    return await RegistrationForm.find();
  },
  async getById(registrationFormId) {
    return await RegistrationForm.findById(registrationFormId);
  },
  async delete(registrationFormId) {
    return await RegistrationForm.findByIdAndDelete(registrationFormId);
  },
  async findByClientId(clientId) {
    return await RegistrationForm.findOne({ clientId });
  },
};
