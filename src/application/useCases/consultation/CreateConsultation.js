const Consultation = require("../../../domain/Consultation");

module.exports = async (consultationData, consultationRepository) => {
  try {
    const consultation = new Consultation(
      consultationData.client,
      consultationData.service,
      consultationData.date,
      consultationData.time
    );

    return consultationRepository.create(consultation);
  } catch (error) {
    throw { message: error.message || "Failed to Create Consultation" };
  }
};
