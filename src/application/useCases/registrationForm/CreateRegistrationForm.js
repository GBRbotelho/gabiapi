const RegistrationForm = require("../../../domain/RegistrationForm");

module.exports = async (registrationFormData, registrationFormRepository) => {
  try {
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
      registrationFormData.treatments,
      registrationFormData.lastDate,
      registrationFormData.respiratoryPain,
      registrationFormData.vertigoSymptoms,
      registrationFormData.strengthLoss,
      registrationFormData.urinarySystem,
      registrationFormData.landmark,
      registrationFormData.procedures,
      registrationFormData.sleepQuality,
      registrationFormData.anxietyStress,
      registrationFormData.activityPause,
      registrationFormData.posture,
      registrationFormData.assessmentConclusion,
      registrationFormData.painLocation,
      registrationFormData.otherLocation,
      registrationFormData.method,
      registrationFormData.price
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
