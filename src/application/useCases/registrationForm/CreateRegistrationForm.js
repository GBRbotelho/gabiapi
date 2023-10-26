const RegistrationForm = require("../../../domain/RegistrationForm");

module.exports = async (registrationFormData, registrationFormRepository) => {
  try {
    console.log(registrationFormData);
    const registrationForm = new RegistrationForm(
      registrationFormData.clientId,
      registrationFormData.status,
      registrationFormData.occupation,
      registrationFormData.physicalActivity,
      registrationFormData.weigth,
      registrationFormData.habits,
      registrationFormData.medications,
      registrationFormData.problems,
      registrationFormData.help,
      registrationFormData.intensity,
      registrationFormData.timer,
      registrationFormData.description,
      registrationFormData.cycle,
      registrationFormData.condition,
      registrationFormData.worsening,
      registrationFormData.improvement,
      registrationFormData.episodes,
      registrationFormData.treatments
    );

    const registrationFormValidate =
      await registrationFormRepository.findByClientId(
        registrationForm.clientId
      );
    if (registrationFormValidate) {
      throw { message: "ClientId ja existe" };
    }

    return registrationFormRepository.create(registrationForm);
  } catch (error) {
    throw { message: error.message || "Failed to Create RegistrationForm" };
  }
};
